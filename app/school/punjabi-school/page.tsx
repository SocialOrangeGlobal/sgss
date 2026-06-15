import Layout from '@/src/components/layout/Layout';
import LazyImage from '@/src/components/common/LazyImage';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Punjabi School | Sri Guru Singh Sabha Craigieburn',
  description: 'Information about Sri Guru Singh Sabha Punjabi School, admissions, and classes.',
};

export default function PunjabiSchoolPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">

          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Punjabi School
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-8 text-[13px] md:text-[14px] leading-relaxed">

            {/* School Profile */}
            <div>
              <h2 className="text-[15px] font-bold mb-2">School Profile</h2>
              <p className="mb-4">
                Sri Guru Singh Sabha Punjabi School is situated in Gurdwara Campus over the last 6 years. Our purpose is to educate children to become young bicultural, bilingual Australian Citizens and adults who will continue to learn and thrive in an ever-changing world. We want our children to have passion for learning Punjabi where they connect, create and produce work that matters to them and others. We nurture children to build the skills and competencies which will assist them to effectively collaborate and operate in the global world. A major upgrade of facilities occurred in 2018, school infrastructure is more attractive and support school community and learning atmosphere. School timings are from 10:00am to 1:00pm except the school holidays
              </p>
                <LazyImage
                  src="/images/school/punjabi/punjabi-school1.jpg"
                  alt="Punjabi School Student"
                  className="w-full h-auto object-cover border border-gray-300 shadow-sm"
                  wrapperClassName="w-full max-w-xl"
                />
            </div>

            {/* Typical Student/Family Profile */}
            <div>
              <h2 className="text-[15px] font-bold mb-2">Typical Student/Family Profile</h2>
              <p className="mb-4">
                We have students from mixed background, at least 10 percent of our children are born overseas, or homeland and they are quick learners in every aspect of study majority of the other students are Australian born and consider Punjabi as a second language. Their age level is from 5 years to 13 years, both girls and boys love to learn our language, culture and traditions. Families from different parts of Punjab are coming to attend the school for example from cities, towns and regional areas.
              </p>
                <LazyImage
                  src="/images/school/punjabi/punjabi-school2.jpg"
                  alt="Punjabi School Students on Stage"
                  className="w-full h-auto object-cover border border-gray-300 shadow-sm"
                  wrapperClassName="w-full max-w-xl"
                />
            </div>

            {/* School Staff */}
            <div>
              <h2 className="text-[15px] font-bold mb-2">School Staff</h2>
              <p className="mb-4">
                School is so proud to provide a learning environment that foster children&apos;s emotional and social learning to develop self-responsibility, respectfulness and resilience. Our teachers inspire students to be active and independent learners and responsible global citizens who act to improve their world. School follows ESAV Professional development activities for all the teachers throughout the year to learn variety of methods to teach and assess children individually. The school ensure that the staff are appropriately trained and have Working with Children Checks and First Aid Certificates are up to date.
              </p>
                <LazyImage
                  src="/images/school/punjabi/punjabi-school3.jpg"
                  alt="Punjabi School Staff and Students"
                  className="w-full h-auto object-cover border border-gray-300 shadow-sm"
                  wrapperClassName="w-full max-w-xl"
                />
            </div>

            {/* Registration Process */}
            <div>
              <h2 className="text-[15px] font-bold mb-2">Registration Process:</h2>
              <p className="mb-2">Please refer to the below information for enrolment:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>minimum age for enrolment is 5 years</li>
                <li>enrolment fees $50</li>
                <li>nil tuition fees</li>
                <li>collect the enrolment form from school office</li>
                <li>submit it either via email at <a href="mailto:school@sgss.org.au" className="text-[#ff6a00] hover:underline">school@sgss.org.au</a> or drop it in person on any Sunday between 10am to 1pm during school term</li>
              </ul>
              <p className="mb-4">
                For more information or feedback please contact school via email at <a href="mailto:school@sgss.org.au" className="text-[#ff6a00] hover:underline">school@sgss.org.au</a> or call Jasvir Kaur on 0424 194 638
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSel7l4UpZMzsch8YT7hJ0FL01P3HHnF15dC5v40wT5d0OWAcA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center bg-[#ff6a00] text-white px-4 md:px-6 py-3 md:py-2.5 rounded-sm font-medium hover:bg-[#e65c00] transition-colors shadow-sm text-sm md:text-base"
              >
                Punjabi school admission/registration form
              </a>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <p>
                <strong>Adult English and Punjabi Class:</strong><br />
                Outline: Mastering the macro skills with practice<br />
                Time: 10:30 am to 1:00 pm (Every Sunday except school term breaks)<br />
                Location: Punjabi School Building
              </p>

              <p>
                <strong>Computer Class Course:</strong> Basics of computer and wide range of courses available<br />
                Time: 11:00am to 1:00pm<br />
                Location: Punjabi School Building<br />
                (Computer classes are running in collaboration with Hume City Council)
              </p>

              <p>
                <em>Special Essay Presentation by one of our students Khushpreet Kaur on air for SBS Punjabi Radio can be found on the link below:</em><br />
                <span className="text-black font-semibold break-all">
                  http://www.sbs.com.au/yourlanguage/punjabi/en/content/khushpreet-kaurs-essay-why-she-learns-punjabi-while-living-australia
                </span>
              </p>

              <p>
                <a href="http://www.sbs.com.au/podcasts/yourlanguage/punjabi/episode/419973/Avnoor-Kaur-Punjabi-Essay" target="_blank" rel="noopener noreferrer" className="text-[#ff6a00] hover:underline break-all">
                  http://www.sbs.com.au/podcasts/yourlanguage/punjabi/episode/419973/Avnoor-Kaur-Punjabi-Essay
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
