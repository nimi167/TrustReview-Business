import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Select, MenuItem, FormControl, InputLabel, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LuPlus } from 'react-icons/lu';
import { fetchCategories, registerCompany } from '../../../services/authService';

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        website: '',
        companyName: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        workEmail: '',
        address: '',
        city: '',
        country: '',
        zipcode: '',
        phone: '',
        category: '',
        subcategory: '',
        password: '',
        receiveDemo: false,
    });
    const [errors, setErrors] = useState({});
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [newCategory, setNewCategory] = useState(false);
    const [newSubcategory, setNewSubcategory] = useState(false);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        loadCategories();
    }, []);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (name === 'phone' || name === 'zipcode') {
            // Allow only numeric values
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData({
                ...formData,
                [name]: numericValue,
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }

        // Clear the specific field error
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setFormData({
            ...formData,
            category: selectedCategory,
            subcategory: '',
        });
        const category = categories.find(cat => cat.Category === selectedCategory);
        if (category) {
            setSubcategories(category.SubCategory);
        } else {
            setSubcategories([]);
        }
        if (selectedCategory) {
            setErrors({
                ...errors,
                category: '',
            });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        let validationErrors = {};

        // Validate required fields
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'receiveDemo') {
                validationErrors[key] = 'This field is required';
            }
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({}); // Clear errors if no validation errors

        try {
            const result = await registerCompany(formData);
            console.log('Form submitted successfully:', result);
            localStorage.setItem('token', result.authToken);
            navigate('/');
        } catch (error) {
            if (error.status === 400) {
                setErrors(error.errors);
            } else if (error.message === 'Internal Server Error') {
                console.error('Server error:', error);
                // Optionally show a server error message to the user
            } else {
                console.error('Unknown error:', error);
                // Optionally show a general error message to the user
            }
        }
    };



    const countries = [
        { value: 'Afghanistan', label: 'Afghanistan' },
        { value: 'Andorra', label: 'Andorra' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Antarctica', label: 'Antarctica' },
        { value: 'Aruba', label: 'Aruba' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Bahamas', label: 'Bahamas' },
        { value: 'China', label: 'China' },
        { value: 'Congo - Brazzaville', label: 'Congo - Brazzaville' },
        { value: 'Cuba', label: 'Cuba' },
        { value: 'Curaçao', label: 'Curaçao' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Greece', label: 'Greece' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'South Korea', label: 'South Korea' },
        { value: 'Svalbard and Jan Mayen', label: 'Svalbard and Jan Mayen' },
        { value: 'Tajikistan', label: 'Tajikistan' },
        { value: 'Tanzania', label: 'Tanzania' },
        { value: 'Togo', label: 'Togo' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States', label: 'United States' },
        { value: 'Zimbabwe', label: 'Zimbabwe' }
    ];
    const steps = [
        {
            icon: '/images/1-Send_up_to_100_invitations__per_month_-_Create_Free_account_page.webp',
            title: '1. Get ReviewsSend up to 50 invitations per month',
            description: "Get great reviews by simply asking your customers about their experience after every purchase."
        },
        {
            icon: '/images/UK-Review_Collector-TrustBox_Widgets.webp',
            title: 'Increase onsite conversions with TrustBox Widgets',
            description: 'Increase basket size, and reduce cart abandonment by putting TrustBox widgets on your site. Two styles to choose from.'
        },
        {
            icon: '/images/3-Learn_what_your_customers__really_think_-_Create_Free_account_page.webp',
            title: 'Learn what your customers really think',
            description: 'Monitor your brand’s performance and get actionable insights into your performance with our user-friendly dashboards.'
        }
    ];

    return (
        <>

            <div className='bg-[#fe7a1a]'>
                <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 text-3xl lg:text-4xl leading-[48px] text-[#412612] font-bold flex flex-col justify-center lg:h-[100vh]">
                        <div className="mt-10 lg:mt-0 text-center lg:text-left">Create your free TrustReview account</div>
                        <div className="text-center lg:text-left text-xl lg:text-3xl mt-4">Start collecting reviews today</div>
                    </div>
                    <div className="lg:w-1/2 py-16 px-3 lg:px-0">
                        <div className="max-w-[510px] mx-auto bg-white p-5 lg:p-10 rounded-[30px] shadow-md">
                            <h2 className="text-3xl font-semibold mb-4 mt-2">Create a free account</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex flex-col items-center gap-4">
                                    <button className={`text-white font-medium bg-[#1A66FF] hover:bg-blue-600 w-full flex items-center`}>
                                        <div className="bg-white py-2 ps-2 m-[1px]"><FcGoogle className="mr-2" size={26} /></div>
                                        <div className="w-full py-2 text-sm">Sign up with Google</div>
                                    </button>
                                    <div className="flex items-center gap-3 w-full">
                                        <hr className="w-1/2 border-gray-300" />
                                        <span className="text-gray-500">OR</span>
                                        <hr className="w-1/2 border-gray-300" />
                                    </div>
                                </div>
                                <h3 className="text-md font-semibold">Sign up with email</h3>
                                <TextField
                                    id="website"
                                    name="website"
                                    label="Website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    error={!!errors.website}
                                    helperText={errors.website}
                                />
                                <TextField
                                    id="companyName"
                                    name="companyName"
                                    label="Company Name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    error={!!errors.companyName}
                                    helperText={errors.companyName}
                                />
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                />
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />
                                <TextField
                                    id="jobTitle"
                                    name="jobTitle"
                                    label="Job Title"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    error={!!errors.jobTitle}
                                    helperText={errors.jobTitle}
                                />
                                <TextField
                                    id="workEmail"
                                    name="workEmail"
                                    label="Work Email"
                                    value={formData.workEmail}
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                    error={!!errors.workEmail}
                                    helperText={errors.workEmail}
                                />

                                <Box display="flex" gap={2}>
                                    <FormControl sx={{ width: 200 }} error={!!errors.country}>
                                        <InputLabel htmlFor="country">Country</InputLabel>
                                        <Select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            label="Country"
                                            fullWidth
                                        >
                                            {countries.map((country) => (
                                                <MenuItem key={country.value} value={country.value}>{country.label}</MenuItem>
                                            ))}
                                        </Select>
                                        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                                    </FormControl>
                                    <TextField
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        fullWidth

                                        // size="small"
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                    />
                                </Box>
                                {formData.phone && <>

                                    <TextField
                                        id="address"
                                        name="address"
                                        label="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        fullWidth
                                        size="small"
                                        error={!!errors.address}
                                        helperText={errors.address}
                                    />
                                    <TextField
                                        id="city"
                                        name="city"
                                        label="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        fullWidth
                                        size="small"
                                        error={!!errors.city}
                                        helperText={errors.city}
                                    />
                                    <TextField
                                        id="zipcode"
                                        name="zipcode"
                                        label="Zipcode"
                                        value={formData.zipcode}
                                        onChange={handleChange}
                                        fullWidth
                                        size="small"
                                        error={!!errors.zipcode}
                                        helperText={errors.zipcode}
                                    />
                                    <FormControl fullWidth error={!!errors.category}>
                                        {newCategory ?
                                            <TextField
                                                id="newCategory"
                                                name="newCategory"
                                                label="Add New Category"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                fullWidth

                                                size="small"
                                            />
                                            :
                                            <>
                                                <InputLabel htmlFor="category">Category</InputLabel>
                                                <Select
                                                    id="category"
                                                    name="category"
                                                    value={formData.category}
                                                    onChange={(e) => {
                                                        handleCategoryChange(e);
                                                    }}
                                                    label="Category"
                                                    fullWidth
                                                    size="small"
                                                    disabled={newCategory}
                                                >
                                                    {categories.map((category) => (
                                                        <MenuItem key={category._id} value={category.Category}>{category.Category}</MenuItem>
                                                    ))}
                                                    <MenuItem onClick={() => setNewCategory(true)}>
                                                        <p className='text-red-500 flex items-center text-sm'> <LuPlus size={20} className='mr-2' /> Add New Category</p>
                                                    </MenuItem>
                                                </Select>
                                            </>
                                        }
                                        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                                    </FormControl>
                                    <FormControl fullWidth error={!!errors.subcategory}>
                                        {newSubcategory ?
                                            <TextField
                                                id="newSubcategory"
                                                name="newSubcategory"
                                                label="Add New Subcategory"
                                                value={formData.subcategory}
                                                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                                                fullWidth
                                                size="small"
                                            />
                                            :
                                            <>
                                                <InputLabel htmlFor="subcategory">Subcategory</InputLabel>
                                                <Select
                                                    id="subcategory"
                                                    name="subcategory"
                                                    value={formData.subcategory}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                    }}
                                                    label="Subcategory"
                                                    fullWidth
                                                    size="small"
                                                    disabled={!formData.category}
                                                >
                                                    {subcategories.map((subcategory, index) => (
                                                        <MenuItem key={index} value={subcategory}>{subcategory}</MenuItem>
                                                    ))}
                                                    <MenuItem onClick={() => setNewSubcategory(true)}>
                                                        <p className='text-red-500 flex items-center text-sm'><LuPlus size={20} className='mr-2' /> Enter New Subcategory</p>
                                                    </MenuItem>
                                                </Select>
                                            </>
                                        }
                                        {errors.subcategory && <p className="text-red-500 text-xs mt-1">{errors.subcategory}</p>}
                                    </FormControl>
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        fullWidth
                                        size="small"
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />
                                </>
                                }
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="receiveDemo"
                                        name="receiveDemo"
                                        checked={formData.receiveDemo}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <label htmlFor="receiveDemo" className="ml-2 text-gray-700 text-xs">
                                        I'd like to receive a demo of TrustReview paid plans.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#1A66FF] hover:bg-blue-700 text-sm text-white py-3 px-4 focus:outline-none"
                                >
                                    Create free account
                                </button>
                                <p className="text-gray-600 mt-4 text-[10px]">
                                    This site is protected by reCAPTCHA and the Google{' '}
                                    <a href="/" className="text-[#0114EE] text-[11px] underline">
                                        Privacy Policy
                                    </a>{' '}
                                    and{' '}
                                    <a href="/" className="text-[#0114EE] text-[11px] underline">
                                        Terms of Service
                                    </a>{' '}
                                    apply.
                                </p>
                                <p className="text-gray-600 text-[10px]">
                                    By submitting this form you accept our{' '}
                                    <a href="/" className="text-[#0114EE] text-[11px] underline">
                                        Privacy Policy
                                    </a>{' '}
                                    and agree to receive
                                    emails or calls from TrustReview about our products and services. You may
                                    unsubscribe at any time by clicking the unsubscribe link at the bottom of the
                                    email or by contacting us at{' '}
                                    <a href="mailto:privacy@trustreview.com" className="text-[#0114EE] text-[11px] underline">
                                        privacy@trustreview.com
                                    </a>
                                    . TrustReview's calls may be
                                    recorded for training and quality purposes.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-Creem pb-6 pt-6 lg:pt-10 lg:pb-8`}>
                <div className="container">
                    <div className="font-semibold text-3xl lg:text-[32px] mb-8 text-center">Why sign up for a Free Account</div>
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}>
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col justify-center items-center text-center rounded-lg p-7 pb-2 my-2`}>
                                <img src={step.icon} alt={step.title} className="h-48 mb-4 object-contain" />
                                <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
                                <p className="text-[16px] leading-6 font-light mb-4">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;