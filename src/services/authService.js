export const fetchCategories = async () => {
  try {
    const response = await fetch('/Get/All/Categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data.Category;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const registerCompany = async (companyData) => {
  const bodyData = {
    ...companyData,
    phone: parseInt(companyData.phone, 10),
  };

  try {
    const response = await fetch(`${API_BASE_URL}/Register/Company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    });

    const result = await response.json();

    if (response.status === 400) {
      throw { status: 400, errors: result.errors };
    }

    if (response.status === 500) {
      throw new Error('Internal Server Error');
    }

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return result;
  } catch (error) {
    console.error('Error registering company:', error);
    throw error;
  }
};