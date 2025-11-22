import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:8787/member';

const NewRegisterMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const abortControllerRef = React.useRef(null);

  // Fetch members data
  const fetchMembers = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (result.success && result.data && Array.isArray(result.data.members)) {
        setMembers(result.data.members);
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to load members data');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchMembers]);

  // Filter members based on search term
  const filteredMembers = useMemo(() => {
    if (!searchTerm.trim()) return members;

    const lowercasedSearch = searchTerm.toLowerCase();
    return members.filter(member =>
      Object.entries(member).some(([key, value]) => {
        if (['name', 'email', 'number', 'city', 'profession'].includes(key)) {
          return String(value).toLowerCase().includes(lowercasedSearch);
        }
        return false;
      })
    );
  }, [members, searchTerm]);

  // Sort members
  const sortedMembers = useMemo(() => {
    const sortableMembers = [...filteredMembers];
    
    return sortableMembers.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handle date sorting
      if (sortConfig.key === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      // Handle string sorting (case insensitive)
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredMembers, sortConfig]);

  // Paginate members
  const paginatedMembers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedMembers.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedMembers, currentPage, itemsPerPage]);

  // Handle sort
  const handleSort = useCallback((key) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
    setCurrentPage(1);
  }, []);

  // Handle search
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  // Handle retry
  const handleRetry = useCallback(() => {
    fetchMembers();
  }, [fetchMembers]);

  // Format date
  const formatDate = useCallback((dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return 'Invalid Date';
    }
  }, []);

  // Get sort indicator
  const getSortIndicator = useCallback((key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  }, [sortConfig]);

  // Table headers configuration
  const tableHeaders = useMemo(() => [
    { key: 'sno', label: 'S.No.', sortable: false, mobile: true },
    { key: 'name', label: 'Name', sortable: true, mobile: true },
    { key: 'email', label: 'Email', sortable: true, mobile: false },
    { key: 'number', label: 'Phone No.', sortable: false, mobile: true },
    { key: 'createdAt', label: 'Apply Date', sortable: true, mobile: true },
    { key: 'profession', label: 'Profession', sortable: true, mobile: false },
    { key: 'city', label: 'City', sortable: true, mobile: false },
    { key: 'sportperson', label: 'Status', sortable: true, mobile: true },
  ], []);

  // Total pages calculation
  const totalPages = Math.ceil(sortedMembers.length / itemsPerPage);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading members data...</p>
        </div>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold text-red-600 mb-2">Error Loading Data</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h1 className="text-2xl font-bold text-white">New Register Members</h1>
        <p className="text-blue-100 mt-1">Recently registered members list</p>
      </div>

      {/* Controls */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex-1 w-full sm:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, email, phone, city, profession..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Total:</span>
            <span className="font-semibold text-blue-600">{sortedMembers.length}</span>
            <span>members</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden">
        {/* Mobile Cards View */}
        <div className="block md:hidden">
          {paginatedMembers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-2">📝</div>
              <p>No members found</p>
              {searchTerm && <p className="text-sm mt-1">Try adjusting your search terms</p>}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {paginatedMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-sm font-medium text-gray-500">S.No.</span>
                        <p className="font-semibold">{(currentPage - 1) * itemsPerPage + index + 1}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        member.sportperson 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {member.sportperson ? 'Athlete' : 'Regular'}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500">Name</span>
                      <p className="font-semibold text-gray-900">{member.name}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Phone</span>
                        <p className="text-gray-900">{member.number}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Apply Date</span>
                        <p className="text-gray-900">{formatDate(member.createdAt)}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500">Email</span>
                      <p className="text-gray-900 truncate">{member.email}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Profession</span>
                        <p className="text-gray-900">{member.profession || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">City</span>
                        <p className="text-gray-900">{member.city || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header.key}
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                      header.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                    }`}
                    onClick={() => header.sortable && handleSort(header.key)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{header.label}</span>
                      {header.sortable && (
                        <span className="text-gray-400 text-sm">
                          {getSortIndicator(header.key)}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedMembers.length === 0 ? (
                <tr>
                  <td colSpan={tableHeaders.length} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-4xl mb-2">📝</div>
                      <p>No members found</p>
                      {searchTerm && <p className="text-sm mt-1">Try adjusting your search terms</p>}
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedMembers.map((member, index) => (
                  <motion.tr
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="max-w-xs truncate" title={member.email}>
                        {member.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {member.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(member.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {member.profession || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {member.city || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        member.sportperson 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {member.sportperson ? 'Athlete' : 'Regular'}
                      </span>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {sortedMembers.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-700">
                Showing <span className="font-semibold">{((currentPage - 1) * itemsPerPage) + 1}</span> to{' '}
                <span className="font-semibold">
                  {Math.min(currentPage * itemsPerPage, sortedMembers.length)}
                </span> of{' '}
                <span className="font-semibold">{sortedMembers.length}</span> members
              </div>
              
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 text-sm font-medium rounded-md min-w-[40px] transition-colors ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewRegisterMembers;