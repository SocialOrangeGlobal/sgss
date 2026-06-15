'use client';

import Layout from '@/src/components/layout/Layout';
import { useState } from 'react';

export default function LeaveMessagePage() {
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
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#8b6914' }}>
            Leave a Message
          </h1>

          <div className="max-w-4xl mx-auto text-[#333] text-[13px] md:text-[14px]">
            {submitted ? (
              <div className="border border-green-300 bg-green-50 rounded p-4 text-center">
                <p className="text-sm font-bold text-green-800">Your message has been sent. Thank you!</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-1.5 rounded text-[#333] font-medium transition-colors"
                  style={{ backgroundColor: '#d2b48c' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <p className="mb-6">
                  If you want more information fill in this form. You will be contacted as soon as possible.<br />
                  Please fill in all <strong>required fields</strong>.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block mb-1">Your Name (required)</label>
                    <input type="text" required className={fieldBase} />
                  </div>
                  <div>
                    <label className="block mb-1">Your Email (required)</label>
                    <input type="email" required className={fieldBase} />
                  </div>
                  <div>
                    <label className="block mb-1">Subject</label>
                    <input type="text" className={fieldBase} />
                  </div>
                  <div>
                    <label className="block mb-1">Your Message</label>
                    <textarea rows={6} className={fieldBase}></textarea>
                  </div>

                  <div className="pt-2">
                    <label className="block mb-2 font-bold tracking-[0.2em] italic">L T R U</label>
                    <input type="text" className={fieldBase} />
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
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
