'use client';

import Layout from '@/src/components/layout/Layout';
import { useState } from 'react';

export default function RegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fieldBase = "w-full border border-[#d1b38e] rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-[#8b6914] bg-white";

  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-12">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-2" style={{ color: '#8b6914' }}>
            User Registration
          </h1>
          <h2 className="text-lg md:text-xl lg:text-[22px] font-serif text-center mb-8" style={{ color: '#333' }}>
            Membership Details Form
          </h2>

          <div className="max-w-4xl mx-auto text-[#333] text-[13px] md:text-[14px]">
            {submitted ? (
              <div className="border border-green-300 bg-green-50 rounded p-4 text-center">
                <p className="text-sm font-bold text-green-800">Your registration form has been submitted!</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-1.5 rounded text-[#333] font-medium transition-colors"
                  style={{ backgroundColor: '#d2b48c' }}
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1">Name (Required)</label>
                    <input type="text" className={fieldBase} required />
                  </div>
                  <div>
                    <label className="block mb-1">D.O.B</label>
                    <input type="text" placeholder="dd/mm/yyyy" className={fieldBase} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1">Spouse Name (Required)</label>
                    <input type="text" className={fieldBase} required />
                  </div>
                  <div>
                    <label className="block mb-1">D.O.B</label>
                    <input type="text" placeholder="dd/mm/yyyy" className={fieldBase} />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Address (Required)</label>
                  <textarea rows={5} className={fieldBase} required></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1">Suburb (Required)</label>
                    <input type="text" className={fieldBase} required />
                  </div>
                  <div>
                    <label className="block mb-1">Post Code</label>
                    <input type="text" className={fieldBase} />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Email (Required)</label>
                  <input type="email" className={fieldBase} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1">Home Phone</label>
                    <input type="text" className={fieldBase} />
                  </div>
                  <div>
                    <label className="block mb-1">Mobile</label>
                    <input type="text" className={fieldBase} />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-1.5 rounded border border-[#c1a37c] text-[#333] font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#d2b48c' }}
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
