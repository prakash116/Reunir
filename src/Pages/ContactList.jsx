import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:8787/contact';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // AbortController for cleanup
  const abortControllerRef = React.useRef(null);

  // Fetch data from API
  const fetchData = useCallback(async () => {
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result); // Debug log
      
      // Check the actual API response structure
      const contacts = result.data || result; // Handle both response formats
      
      // Transform data to ensure we have all required fields with fallbacks
      const transformedData = Array.isArray(contacts) ? contacts.map((item, index) => ({
        id: item._id || item.id || index,
        name: item.name || 'N/A',
        email: item.email || 'N/A',
        number: item.number || item.phone || 'N/A', // Fixed: using 'number' as per your schema
        createdAt: item.createdAt || new Date().toISOString(),
        message: item.message || item.description || 'No message',
      })) : [];

      console.log('Transformed Data:', transformedData); // Debug log
      setData(transformedData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to fetch data');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    const lowercasedSearch = searchTerm.toLowerCase();
    return data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(lowercasedSearch)
      )
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    const sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  // Handle sort
  const handleSort = useCallback((key) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  // Handle search
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  // Handle retry
  const handleRetry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  // Table headers configuration
  const tableHeaders = useMemo(() => [
    { key: 'sno', label: 'S.No.', sortable: false },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'number', label: 'Phone No.', sortable: true }, // Fixed: using 'number'
    { key: 'createdAt', label: 'Apply Date', sortable: true },
    { key: 'message', label: 'Message', sortable: false },
  ], []);

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

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 p-4">
        <div className="text-red-600 text-lg mb-4">Error: {error}</div>
        <button
          onClick={handleRetry}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search across all fields..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Mobile Cards */}
        <div className="block md:hidden">
          {paginatedData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-gray-200 p-4 hover:bg-gray-50"
            >
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">S.No.</span>
                  <span>{(currentPage - 1) * itemsPerPage + index + 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Name</span>
                  <span className="truncate max-w-[150px]">{item.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Email</span>
                  <span className="truncate max-w-[150px]">{item.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Phone</span>
                  <span>{item.number}</span> {/* Fixed: using item.number */}
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Apply Date</span>
                  <span>{formatDate(item.createdAt)}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600 block mb-1">Message</span>
                  <p className="text-sm text-gray-700 line-clamp-2">{item.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Table */}
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
                        <span className="text-gray-400">
                          {sortConfig.key === header.key
                            ? sortConfig.direction === 'asc'
                              ? '↑'
                              : '↓'
                            : '↕'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.number} {/* Fixed: using item.number */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(item.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {item.message}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Data State */}
        {paginatedData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No data found
          </div>
        )}
      </div>

      {/* Pagination */}
      {sortedData.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-700">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, sortedData.length)} of{' '}
            {sortedData.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(sortedData.length / itemsPerPage) }, (_, i) => i + 1)
              .filter(page => 
                page === 1 || 
                page === Math.ceil(sortedData.length / itemsPerPage) ||
                Math.abs(page - currentPage) <= 1
              )
              .map((page, index, array) => (
                <React.Fragment key={page}>
                  {index > 0 && array[index - 1] !== page - 1 && (
                    <span className="px-4 py-2 text-sm text-gray-500">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                </React.Fragment>
              ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(sortedData.length / itemsPerPage)))}
              disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;