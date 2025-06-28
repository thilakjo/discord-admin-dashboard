# My Discord Server Admin Dashboard (Frontend Only)

Hey there! This is my take on a frontend-only mock Discord Server Admin Dashboard. I built this project using Next.js 14+ (specifically the App Router) and Tailwind CSS. My goal was to create a dashboard that simulates server statistics and some basic admin interactions, all without needing a backend or any real Discord API integration.

## 🎯 My Objective

The main reason I took on this project was to really flex my skills with Next.js, Tailwind CSS, React Hooks, and the Context API. Building a dashboard from scratch, making sure it was responsive and accessible, was a fantastic learning experience!

## ✨ What I've Built (Features)

Here's a quick rundown of what you'll find in this dashboard:

- **Dashboard Overview:** This is where you get a quick glance at key mock metrics like total members, online users, active roles, and messages sent today. I also included a basic member growth chart to visualize trends.
- **Members Page:** I've set up a paginated table to display my mock users. You can search through them, filter by role, and even sort them. I also added a simple modal to simulate adding new members, even though it's just frontend.
- **Roles Page:** Here, I've listed out the server roles. You can toggle their visibility (it's mocked, so no actual change in the backend) and even "rename" them to see the UI update.
- **Messages Page:** This page shows a list of mock messages, and I've added a "Delete" button for each (again, mocked functionality, so it won't actually delete anything permanently).
- **Responsive Layout:** I put effort into making sure the dashboard looks good on any device – desktop, tablet, or phone. The sidebar collapses nicely on smaller screens to save space.
- **Dark Mode Toggle:** This was a fun bonus feature! You can switch between light and dark modes, and your preference will even persist in local storage, so it remembers your choice for next time.

## 🛠️ My Stack & Tools

I chose these technologies for the project:

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **State Management:** Mostly relying on good old React Hooks (`useState`, `useEffect`) and the Context API for global states.
- **Date Formatting:** `date-fns` came in handy for managing and formatting all the dates in my mock data.

## 📦 How to Get It Running Locally

Want to check it out on your machine? Here's how:

1.  **Clone my repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd discord-admin-dashboard
    ```
2.  **Install the dependencies:**
    ```bash
    npm install
    # or if you prefer yarn
    yarn install
    ```
3.  **Fire up the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Then, just open your browser and head to [http://localhost:3000](http://localhost:3000) to see it in action!

## 💡 My Approach & Design Decisions

I put a lot of thought into how I built this:

- **File Structure:** I tried to keep things super organized. My files are grouped by `app` routes, and `components` are sorted into folders like `layout`, `ui` primitives, and then more specific feature modules. `context` handles my global state, and `lib` is where I keep all my mock data and utility functions.
- **Styling:** I went with pure Tailwind CSS. I love the utility-first approach. I even defined some custom colors in `tailwind.config.ts` to get that classic Discord look and feel.
- **Responsiveness:** Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) were invaluable here. I also used conditional rendering for the sidebar, making it neatly collapse on smaller screens using state from my `AppContext`.
- **State Management:** For local component data, I stuck with `useState`. For things that needed to be accessed globally, like the sidebar's visibility or the current theme, I leveraged `useContext` through my `AppContext`.
- **Mock Data:** Since this is frontend-only, all the data you see is hardcoded. You'll find it all neatly organized in `src/lib/data.ts` (or `src/data.ts` depending on where you put it).
- **Accessibility:** I made an effort to include basic ARIA attributes (`aria-label`, `role="switch"`) and kept keyboard navigation in mind for interactive elements. Using proper headings (`h1`, `h2`, `h3`) also helps with document structure for screen readers.

## 📸 Screenshots

Here are some glimpses of my dashboard in action:

### Dashboard Overview

![Dashboard Overview](./public/Screenshot%202025-06-28%20at%207.33.08 PM.png)
_A quick look at the main dashboard metrics and member growth chart._

### Members Page

![Members List](./public/Screenshot%202025-06-28%20at%207.33.20 PM.png)
_Managing server members with pagination and filtering._

### Roles Page

![Roles List](./public/Screenshot%202025-06-28%20at%207.33.27 PM.png)
_Viewing and managing server roles._

### Messages Page

![Messages Log](./public/Screenshot%202025-06-28%20at%207.33.31 PM.png)
_A log of recent server messages._

## 🙏 Big Thanks To...

- [Heroicons](https://heroicons.com/) for providing all the awesome icons.
- [date-fns](https://date-fns.org/) for making date manipulation so much easier.
