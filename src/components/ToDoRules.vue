<template>

    <div class="max-w-2xl mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white">
      <h1 class="text-2xl font-bold mb-4">To-Do Application Rules and Regulations</h1>
      
      <ol class="list-decimal pl-6 space-y-4">
        <li>
          <h2 class="text-xl font-semibold">User Registration</h2>
          <ul class="list-disc pl-4">
            <li><strong>Eligibility:</strong> Users must be at least 13 years old to register for an account.</li>
            <li><strong>Account Security:</strong> Users are responsible for maintaining the confidentiality of their login credentials and should not share their account with others.</li>
          </ul>
        </li>
  
        <li>
          <h2 class="text-xl font-semibold">Task Management</h2>
          <ul class="list-disc pl-4">
            <li><strong>Task Creation:</strong> Users can create tasks with a title and optional description. Each task should clearly describe the intended action.</li>
            <li><strong>Due Dates:</strong> Users may assign due dates to tasks. It is the user's responsibility to complete tasks by the specified due date.</li>
            <li><strong>Priority Levels:</strong> Tasks can be categorized by priority (e.g., high, medium, low). Users are encouraged to prioritize their tasks effectively.</li>
          </ul>
        </li>
  
        <li>
          <h2 class="text-xl font-semibold">Task Completion</h2>
          <ul class="list-disc pl-4">
            <li><strong>Marking Tasks:</strong> Users should mark tasks as completed only when they are genuinely finished.</li>
            <li><strong>Undoing Completion:</strong> Users may undo the completion of a task if necessary, allowing for flexibility in task management.</li>
          </ul>
        </li>
  
        <li>
          <h2 class="text-xl font-semibold">Task Deletion</h2>
          <ul class="list-disc pl-4">
            <li><strong>Removing Tasks:</strong> Users can delete tasks they no longer wish to keep. Deleted tasks cannot be recovered.</li>
            <li><strong>Confirmation:</strong> A confirmation prompt will appear before permanently deleting a task to prevent accidental deletions.</li>
          </ul>
        </li>
  
        <li>
          <h2 class="text-xl font-semibold">User Conduct</h2>
          <ul class="list-disc pl-4">
            <li><strong>Respectful Behavior:</strong> Users must engage respectfully within the app, avoiding any abusive or inappropriate language.</li>
            <li><strong>Feedback and Support:</strong> Users are encouraged to provide constructive feedback and report any issues with the application.</li>
          </ul>
        </li>
  
        <li>
          <h2 class="text-xl font-semibold">Data Privacy</h2>
          <ul class="list-disc pl-4">
            <li><strong>Data Protection:</strong> User data will be stored securely and used only for the purposes of task management. Personal information will not be shared with third parties without user consent.</li>
            <li><strong>Data Retention:</strong> Users can request the deletion of their account and associated data at any time.</li>
          </ul>
        </li>
  
        <li>
          <h2 class="text-xl font-semibold">Changes to Rules</h2>
          <ul class="list-disc pl-4">
            <li><strong>Amendments:</strong> The rules and regulations may be updated periodically. Users will be notified of significant changes, and continued use of the application constitutes acceptance of the new terms.</li>
          </ul>
        </li>
      </ol>
  
      <p class="mt-6 text-gray-600">
        These rules and regulations are designed to ensure a positive experience for all users of the to-do application. By following these guidelines, users can effectively manage their tasks and contribute to a respectful community.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoRules',

  
  };
  </script>
  
  <style scoped>
  /* Additional styles can go here if needed */
  </style>
  