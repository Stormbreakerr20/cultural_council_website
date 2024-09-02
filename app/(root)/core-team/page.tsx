import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Luv Sharma",
      role: "Member",
      image: "https://drive.google.com/uc?id=1HKwicgGdSrg3-IGPjH5sqS_jY4HbCOlU",
      instagram: "Nhi hai",
      linkedin: "https://www.linkedin.com/in/luvsharmaa",
    },
    {
      name: "Nishchay",
      role: "Member",
      image: "https://drive.google.com/uc?id=1RZb4ArU0t7JiRBD1DF7MvHB2ZTKVpwpI",
      instagram: "None",
      linkedin: "https://www.linkedin.com/in/nishchay-valmiki-0870bb286/",
    },
    {
      name: "Vivek Aggarwal",
      role: "Cultural Secretary",
      image: "https://drive.google.com/uc?id=1iGqxh1Bo0EacUEpPWmGdeufoONduBYRp",
      instagram: "vivekaggarwal05",
      linkedin: "https://www.linkedin.com/in/vivek-aggarwal-b005b125a",
    },
    {
      name: "Aritra Boral",
      role: "Member",
      image: "https://drive.google.com/uc?id=1a7YlvgRpo0gQsdNxbwskYatu_kLh2cZx",
      instagram: "lucifer_morningstar_06660",
      linkedin: "https://www.linkedin.com/in/aritra-boral",
    },
    {
      name: "Gargi Chauhan",
      role: "Member",
      image: "https://drive.google.com/uc?id=1N42jKQ3rVrkx_uXVmTUd9r4hi5jLfqu2",
      instagram: null,
      linkedin: "https://www.linkedin.com/in/gargi-chauhan",
    },
    {
      name: "Garima Chauhan",
      role: "Member",
      image: "https://drive.google.com/uc?id=1SFuRlGPZnl6R-b7WZitqDklkX5rJ6eSL",
      instagram: null,
      linkedin: "https://www.linkedin.com/in/garima-ketan-chauhan",
    },
    {
      name: "Akash Bagri",
      role: "Member",
      image: "https://drive.google.com/uc?id=1-EmPXY69EdXipFjgsnBdKPXNmI2fFt8e",
      instagram: "kyayaarbagri",
      linkedin: "https://www.linkedin.com/in/akash-bagri-8238042a5",
    },
    {
      name: "Akshay",
      role: "Member",
      image: "https://drive.google.com/uc?id=1lYkfkBT9jIxsW81A8yVMkNIbtHE5r3KI",
      instagram: "akshay_1_314",
      linkedin: null,
    },
    {
      name: "Harshbir Singh",
      role: "Member",
      image: "https://drive.google.com/uc?id=1-CUg_DSjQByIpwVR5QNTv_kFSOqaKaMp",
      instagram: "harshbir_026",
      linkedin: "https://www.linkedin.com/in/harshbir-singh-1b37022b8",
    },
    {
      name: "Priyanka",
      role: "Member",
      image: "https://drive.google.com/uc?id=1X4XL-ERsMnXtBvc16zYX6fBc8Te_26fH",
      instagram: "priynka_0004",
      linkedin: "https://www.linkedin.com/in/priyanka-chouhan-bb85aa2a1",
    },
    {
      name: "Yash",
      role: "Member",
      image: "https://drive.google.com/uc?id=1xeddlFO309QTXhSqv9GQqJXO_JCqZJE6",
      instagram: "yash_k_.9",
      linkedin: "https://www.linkedin.com/in/yash-kataria-6a3610284",
    },
    {
      name: "Prabhat Kumar Sahu",
      role: "Member",
      image: "https://drive.google.com/uc?id=1TQTO4erLJkCdMZdybvvAKaTlOHctW_dv",
      instagram: "m_prabhat",
      linkedin: "https://www.linkedin.com/in/prabhat-kr-sahu",
    },
    {
      name: "Shubham S Padhi",
      role: "Member",
      image: "https://drive.google.com/uc?id=1C0PD-li6L1cmu2l5QDMtOxD3mAqPwKST",
      instagram: "shubum_27",
      linkedin: "https://www.linkedin.com/in/shubham-s-padhi/",
    },
    {
      name: "Naman Khatak",
      role: "Member",
      image: "https://drive.google.com/uc?id=1xbSQarwXo_3e7ZX9xMQg-4RPSnlEOU4f",
      instagram: "n.a.m.a.n.devil",
      linkedin: null,
    },
    {
      name: "Anand Pratap Singh",
      role: "Member",
      image: "https://drive.google.com/uc?id=1fudnPnoouCzUNL_pE1IEu4MuqyFGvuv1",
      instagram: "anandpratapsingh101",
      linkedin: "https://www.linkedin.com/in/anand-pratap-singh-b473832ba",
    },
    {
      name: "Arpita Kumari",
      role: "Member",
      image: "https://drive.google.com/uc?id=1rdYE_6PUfNkFspGzs9VAQw38x6FV5VKk",
      instagram: "arpitaa1112",
      linkedin: "https://www.linkedin.com/in/arpita-kumari-b371562a5",
    },
  ];

  return (
    <section className="py-8">
      <div className="flex flex-col justify-center items-center mb-24">
        <div className="mt-32 sm:mt-48 text-xl font-medium text-neutral-100/[0.7] text-center">
          This is the Cultural Society, IIT Mandi
        </div>
        <h1 className="text-6xl max-w-screen-md font-semibold text-center leading-tight">
          Core Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-20 flex justify-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-800 hover:bg-gradient-to-r text-gray-600 from-purple-600 to-purple-400 hover:text-white cursor-pointer">
              <div className="w-40 h-40 bg-purple-200 p-2 rounded-full mx-auto mb-6 overflow-hidden transform hover:scale-110 transition-all duration-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl text-center font-semibold">{member.name}</h3>
              <p className="uppercase text-center tracking-widest text-sm font-light">
                {member.role}
                
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                {member.instagram && (
                  <a href={`https://instagram.com/${member.instagram}`} className="text-xl hover:text-purple-200">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} className="text-xl hover:text-purple-200">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
