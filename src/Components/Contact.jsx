import React from 'react';

const Contact = () => {
    return (
        <section className='flex justify-around items-center bg-cyan-800 text-white py-16'>
            <div>
                <h3 className='text-6xl font-serif'>Let's Work<br /> Together</h3>
            </div>
            <div>
                <form className='flex-1 border p-4 rounded-lg w-3/4 border-1 border-white'>
                    <input type="text" placeholder="Your Name" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:text-accent transition-all" />
                    <input type="email" placeholder="Your Email" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:text-accent transition-all" />
                    <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:text-accent transition-all resize-none mb-12' placeholder='Your Message'></textarea>
                    <button className='btn btn-outline btn-accent border-sky-200'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;