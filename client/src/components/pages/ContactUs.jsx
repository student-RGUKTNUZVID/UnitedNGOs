// export const Contact = () => {
//     const handleFormSubmit = (formData) => {
//       // console.log(formData.entries());
//       const formInputData = Object.fromEntries(formData.entries());
//       console.log(formInputData);
//     };
  
//     return (
//       <section className="section-contact">
//         <h2 className="container-title">Contact Us</h2>
  
//         <div className="contact-wrapper container">
//           <form action={handleFormSubmit}>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter your name"
//               name="username"
//               required
//               autoComplete="off"
//             />
  
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter you email"
//               name="email"
//               required
//               autoComplete="off"
//             />
  
//             <textarea
//               className="form-control"
//               rows="10"
//               placeholder="Enter your message"
//               name="message"
//               required
//               autoComplete="off"
//             ></textarea>
  
//             <button type="submit" value="send">
//               Send
//             </button>
//           </form>
//         </div>
//       </section>
//     );
//   };
export const Contact = () => {
    const handleFormSubmit = (formData) => {
      const formInputData = Object.fromEntries(formData.entries());
      console.log(formInputData);
    };
  
    return (
      <section className="section-contact bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="container-title text-3xl md:text-4xl font-bold text-center text-[#0039A6] mb-6">
          Contact Us
        </h2>
  
        <div className="contact-wrapper container mx-auto max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(new FormData(e.target)); }} className="space-y-4">
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0039A6]"
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="off"
            />
  
            <input
              type="email"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0039A6]"
              placeholder="Enter your email"
              name="email"
              required
              autoComplete="off"
            />
  
            <textarea
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0039A6]"
              rows="6"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
            ></textarea>
  
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#0039A6] text-white font-bold text-lg rounded-md hover:bg-blue-900 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  };
  