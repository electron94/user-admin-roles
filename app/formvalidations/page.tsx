"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // You can perform further actions like making an API request for authentication here
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center pt-3 text-secondary">Login</h1>
      <div className="row mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded p-4 shadow-md"
        >
          <div className="form-group mb-3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              className={`w-full border rounded p-2 ${
                errors.name
                  ? errors.name.type === 'required'
                    ? 'border-red-500'
                    : 'border-gray-300'
                  : ''
              }`}
              type="text"
              id="name"
              {...register('name', { required: true, minLength: 4 })}
              onBlur={() => trigger('name')}
            />
            {errors.name && errors.name.type === 'required' && (
              <p className="text-red-500 text-sm">Please enter the name</p>
            )}
            {errors.name && errors.name.type === 'minLength' && (
              <p className="text-yellow-500 text-sm">
                Please enter at least 4 characters
              </p>
            )}
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className={`w-full border rounded p-2 ${
                errors.email
                  ? errors.email.type === 'required'
                    ? 'border-red-500'
                    : 'border-gray-300'
                  : ''
              }`}
              type="text"
              id="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              onBlur={() => trigger('email')}
            />
            {errors.email && errors.email.type === 'required' && (
              <p className="text-red-500 text-sm">Please enter the email</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p className="text-yellow-500 text-sm">Invalid email address</p>
            )}
          </div>
          <div className="form-group mb-4">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              className={`w-full border rounded p-2 ${
                errors.password
                  ? errors.password.type === 'required'
                    ? 'border-red-500'
                    : 'border-gray-300'
                  : ''
              }`}
              type="password"
              id="password"
              {...register('password', { required: true, minLength: 5 })}
              onBlur={() => trigger('password')}
            />
            {errors.password && errors.password.type === 'required' && (
              <p className="text-red-500 text-sm">Please enter password</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p className="text-yellow-500 text-sm">
                Please enter at least 6 characters
              </p>
            )}
          </div>
          <div className="form-group mb-5">
            <label htmlFor="number" className="text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              className={`w-full border rounded p-2 ${
                errors.number
                  ? errors.number.type === 'required'
                    ? 'border-red-500'
                    : 'border-gray-300'
                  : ''
              }`}
              type="tel"
              id="number"
              {...register('number', { required: true,pattern:/^[0-9]+$/, minLength: 10})}
              onBlur={() => trigger('number')}
            />
            {errors.number && errors.number.type === 'required' && (
              <p className="text-red-500 text-sm">Please enter the number</p>
            )}
            {errors.number && errors.number.type === 'pattern' && (
              <p className="text-red-500 text-sm">Please enter only numbers</p>
            )}
            {errors.number&& errors.number.type === 'minLength' && (
              <p className="text-yellow-500 text-sm">
                Please enter at least 10 digits
              </p>
            )}
          </div>
          <div className="form-group mb-6">
            <label htmlFor="number" className="text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              className={`w-full border rounded p-2 ${
                errors.number
                  ? errors.number.type === 'required'
                    ? 'border-red-500'
                    : 'border-gray-300'
                  : ''
              }`}
              type="number"
              id="number"
              {...register('number', { required: true, minLength: 6 })}
              onBlur={() => trigger('number')}
            />
            {errors.number && errors.number.type === 'required' && (
              <p className="text-red-500 text-sm">Please enter the Pincode</p>
            )}
            {errors.number && errors.number.type === 'minLength' && (
              <p className="text-yellow-500 text-sm">
                Please enter at least 6 digits
              </p>
            )}
          </div>
          <div className="form-group mb-7">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              className={`w-full border rounded p-2 ${
                errors.address
                  ? errors.address.type === 'required'
                    ? 'border-red-500'
                    : 'border-gray-300'
                  : ''
              }`}
              type="text"
              id="address"
              {...register('address', { required: true, minLength: 20 })}
              onBlur={() => trigger('address')}
            />
            {errors.number && errors.number.type === 'required' && (
              <p className="text-red-500 text-sm">Please enter the Address</p>
            )}
            {errors.number && errors.number.type === 'minLength' && (
              <p className="text-yellow-500 text-sm">
                Please enter atleast 20 charecters
              </p>
            )}
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </div>
          <div>
            <Link href="/submit" passHref={true} legacyBehavior={true}>
              <a>Click me</a>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}