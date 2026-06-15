import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Management Committee | Sri Guru Singh Sabha',
  description: 'Meet the Management Committee members of Sri Guru Singh Sabha Craigieburn.',
};

const members = [
  { name: 'Parmjit Singh Grewal', position: 'President', phone: '0433570462' },
  { name: 'Onkar Singh', position: 'Vice President', phone: '0423217636' },
  { name: 'Gurdeep Singh Matharoo', position: 'Secretary', phone: '0417512587' },
  { name: 'Gurvinder Singh', position: 'A.secetary', phone: '0430211180' },
  { name: 'Harjinder Singh', position: 'Treasurer', phone: '0425873323' },
  { name: 'Surinder Singh', position: 'A.Treasurer', phone: '0403343673' },
  { name: 'Dara Singh Aujla', position: 'Member', phone: '0402045250' },
  { name: 'Balbir Singh Aujla', position: 'Member', phone: '0412330315' },
  { name: 'Jaswinder SinghRekhi', position: 'Member', phone: '0413690866' },
  { name: 'Davinder Singh', position: 'Member', phone: '0433003905' },
  { name: 'Amrinder Singh', position: 'Member', phone: '0421579569' },
];

export default function ManagingCommitteePage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-lg px-4 py-8 md:px-8 md:py-8">
          <div className="mb-6">
            <h1 className="text-[22px] font-serif flex items-center gap-2" style={{ color: '#8b4513' }}>
              Management Committee
              <img src="/images/logos/tool.png" alt="" className="h-6 w-auto inline-block" />
            </h1>
            <p className="text-[#ff6a00] text-[13px]">Get information of the management committee members</p>
          </div>

          <div className="bg-white rounded-lg border-[3px] border-[#ff6a00] hover:shadow-[0_0_30px_rgba(255,106,0,0.9)] transition-shadow duration-300 overflow-x-auto">
            <table className="w-full text-[13px] md:text-[14px] text-left text-[#333] min-w-[600px]">
              <thead>
                <tr className="bg-[#f2f9f9] border-b border-gray-300">
                  <th className="py-3 px-4 font-bold text-[#ff6a00]">Name</th>
                  <th className="py-3 px-4 font-bold text-[#ff6a00]">Position</th>
                  <th className="py-3 px-4 font-bold text-[#ff6a00]">Phone</th>
                  <th className="py-3 px-4 font-bold text-[#ff6a00]">Address</th>
                  <th className="py-3 px-4 font-bold text-[#ff6a00]">Image</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, idx) => (
                  <tr key={idx} className={`border-b border-dotted border-gray-400 ${idx % 2 !== 0 ? 'bg-[#f4faf9]' : 'bg-white'}`}>
                    <td className="py-2 px-4">{member.name}</td>
                    <td className="py-2 px-4">{member.position}</td>
                    <td className="py-2 px-4">{member.phone}</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
