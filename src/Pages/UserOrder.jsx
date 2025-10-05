import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionOrder, setActionOrder] = useState(null);
  const [actionStatus, setActionStatus] = useState('accepted');
  const [actionMessage, setActionMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const getAllOrders = async (orderStatus) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/v1/service/getallorders?status=${orderStatus}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setOrders(data.orders || []);
      } else {
        setError(data.message);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError('Failed to fetch orders');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    getAllOrders(newStatus);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleTakeAction = (order) => {
    setActionOrder(order);
    setActionStatus('accepted');
    setActionMessage('');
    setShowActionModal(true);
  };

  const closeActionModal = () => {
    setShowActionModal(false);
    setActionOrder(null);
    setActionStatus('accepted');
    setActionMessage('');
  };

  const handleSubmitAction = async () => {
    if (!actionMessage.trim()) {
      alert('Please enter a message');
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch('/api/v1/service/updateorder', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_status: actionStatus,
          serviceid: actionOrder._id,
          message: actionMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Order updated successfully');
        closeActionModal();
        getAllOrders(status);
      } else {
        alert(data.message || 'Failed to update order');
      }
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  useEffect(() => {
    if (showModal || showActionModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal, showActionModal]);

  useEffect(() => {
    getAllOrders(status);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md">
          <p className="font-semibold text-lg">{error}</p>
          <p className="text-sm mt-2">Redirecting to homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">User Orders</h1>
          <p className="text-gray-600 mt-2">
            Total Orders: <span className="font-semibold text-blue-600">{orders?.length || 0}</span>
          </p>
        </div>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => handleStatusChange('pending')}
            className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
              status === 'pending'
                ? 'bg-yellow-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-yellow-100'
            }`}
          >
            Pending Orders
          </button>
          <button
            onClick={() => handleStatusChange('accepted')}
            className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
              status === 'accepted'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-100'
            }`}
          >
            Accepted Orders
          </button>
          <button
            onClick={() => handleStatusChange('rejected')}
            className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
              status === 'rejected'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-red-100'
            }`}
          >
            Rejected Orders
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  {status !== 'pending' && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders && orders.length > 0 ? (
                  orders.map((order, index) => (
                    <tr
                      key={order._id}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.service}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {order.user_data?.name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(order.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatTime(order.time)}
                      </td>
                      {status !== 'pending' && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.service_status === 'accepted'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {order.service_status}
                          </span>
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleViewDetails(order)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                          >
                            View Details
                          </button>
                          {status === 'pending' && (
                            <button
                              onClick={() => handleTakeAction(order)}
                              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                            >
                              Take Action
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={status === 'pending' ? '6' : '7'}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* View Details Modal */}
      {showModal && selectedOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center sticky top-0 z-10">
              <h2 className="text-2xl font-bold">Order Details</h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 text-3xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
                  Order Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-semibold text-gray-900">{selectedOrder._id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Service</p>
                    <p className="font-semibold text-gray-900">{selectedOrder.service}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(selectedOrder.date)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-semibold text-gray-900">{formatTime(selectedOrder.time)}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">Status</p>
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        selectedOrder.service_status === 'accepted'
                          ? 'bg-green-100 text-green-800'
                          : selectedOrder.service_status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {selectedOrder.service_status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
                  User Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-semibold text-gray-900">
                      {selectedOrder.user_data?.name || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">
                      {selectedOrder.user_data?.phone || 'N/A'}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-gray-900">
                      {selectedOrder.user_data?.address || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Role</p>
                    <p className="font-semibold text-gray-900">
                      {selectedOrder.user_data?.role || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
                  Messages
                </h3>
                <div className="space-y-3">
                  {selectedOrder.any_message && (
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">User Message</p>
                      <p className="text-gray-900">{selectedOrder.any_message}</p>
                    </div>
                  )}
                  {selectedOrder.service_message && (
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Service Message</p>
                      <p className="text-gray-900">{selectedOrder.service_message}</p>
                    </div>
                  )}
                </div>
              </div>

              {selectedOrder.feedback_id && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
                    Additional Information
                  </h3>
                  <div>
                    <p className="text-sm text-gray-600">Feedback ID</p>
                    <p className="font-semibold text-gray-900">
                      {selectedOrder.feedback_id}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-end sticky bottom-0">
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Take Action Modal */}
      {showActionModal && actionOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeActionModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-purple-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
              <h2 className="text-2xl font-bold">Take Action</h2>
              <button
                onClick={closeActionModal}
                className="text-white hover:text-gray-200 text-3xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Order: {actionOrder.service}</p>
                <p className="text-sm text-gray-600">User: {actionOrder.user_data?.name}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Action
                </label>
                <select
                  value={actionStatus}
                  onChange={(e) => setActionStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="accepted">Accept Order</option>
                  <option value="rejected">Reject Order</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={actionMessage}
                  onChange={(e) => setActionMessage(e.target.value)}
                  placeholder="Enter your message here..."
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSubmitAction}
                  disabled={submitting}
                  className={`flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded transition duration-200 ${
                    submitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
                <button
                  onClick={closeActionModal}
                  disabled={submitting}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrder;
