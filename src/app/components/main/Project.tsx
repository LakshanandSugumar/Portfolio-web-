import React from 'react';

function Project() {
  return (
    <div className='flex items-center justify-center min-h-screen py-12 px-4'>
      <div className='w-full max-w-7xl'>
        <h1 className='text-5xl font-bold mb-6'>Projects</h1>
        <div className='space-y-10'>
          {/* Project 1 */}
          <div className='bg-gray-100 p-8 rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold mb-4'>Robotic Arm Control System</h2>
            <p className='text-lg'>
              Developed a robotic arm system using Arduino and various sensors for precise automation tasks. This project integrated mechanical engineering principles with software development, employing C++ to program the robotic movements and control.
            </p>
            <p className='mt-4'>
              The project demonstrated real-world applications in industrial settings, showcasing how robotics can streamline processes with minimal human intervention.
            </p>
          </div>

          {/* Project 2 */}
          <div className='bg-gray-100 p-8 rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold mb-4'>Home Automation System</h2>
            <p className='text-lg'>
              Created a comprehensive home automation system using Python and a PLC to manage household devices and optimize energy use. The project featured integration with mobile and web applications, allowing remote monitoring and control.
            </p>
            <p className='mt-4'>
              This solution showcased my skills in both software development and control automation, providing a seamless user experience and significant energy efficiency improvements.
            </p>
          </div>

          {/* Project 3 */}
          <div className='bg-gray-100 p-8 rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold mb-4'>Interactive Game Development</h2>
            <p className='text-lg'>
              Designed and developed an interactive game from scratch, using C++ and a game development framework. This project highlighted my ability to work on the full development cycle, from ideation and programming to testing and deployment.
            </p>
            <p className='mt-4'>
              The game focused on problem-solving and quick decision-making, demonstrating my understanding of algorithms and player experience optimization.
            </p>
          </div>

          {/* Project 4 */}
          <div className='bg-gray-100 p-8 rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold mb-4'>Web Application for Task Management</h2>
            <p className='text-lg'>
              Developed a task management web app using React and Node.js, featuring user authentication, task prioritization, and data visualization. This project helped showcase my skills in modern web development and full-stack programming.
            </p>
            <p className='mt-4'>
              I implemented responsive design principles to ensure the app worked well on both desktop and mobile devices, focusing on user experience and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
