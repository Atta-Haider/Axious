import axios from 'axios';

const addTableData = async (tableName, data) => {
  const supabaseUrl = `https://nxjbwfrlazrxqbnjwvmz.supabase.co/rest/v1/${tableName}`;
  const supabaseKey = import.meta.env.VITE_CONTACT_KEY;

  try {
    const response = await axios.post(supabaseUrl, data, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation', // Returns the inserted data
      },
    });
    console.log(`Added data to ${tableName}:`, response.data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    console.error('Add data error:', {
      message: errorMessage,
      status: error.response?.status,
      details: error.response?.data,
    });
    throw new Error(errorMessage);
  }
};

export default addTableData;