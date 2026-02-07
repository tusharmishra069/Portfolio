# Tushar Kumar Mishra - Portfolio

Welcome to the source code for my personal portfolio website. This project showcases my skills, experience, and projects as a Fullstack AI/ML & Blockchain Developer. It features a modern, responsive design and an integrated **AI-powered assistant**.

## 🚀 Features

-   **Modern UI/UX:** Built with a clean, dark-themed aesthetic using **Glassmorphism** effects.
-   **AI Chatbot:** An intelligent assistant powered by **Google Gemini Pro** that answers questions about my resume, skills, and experience.
    -   *Context-Aware:* Knows my specific project details and background.
    -   *Smart Actions:* Suggests booking calls or visiting LinkedIn for relevant queries.
    -   *Interactive UI:* Features suggested question chips, typing indicators, and markdown formatting.
-   **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
-   **Smooth Animations:** Powered by **Framer Motion** for a seamless user experience.
-   **Project Showcase:** Detailed sections for Experience, Projects, Skills, and Education.

## 🛠️ Tech Stack

-   **Frontend:** [Next.js 15](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **AI Integration:** [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai) (Gemini)
-   **Markdown Rendering:** [react-markdown](https://github.com/remarkjs/react-markdown)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tusharmishra069/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your Google Gemini API key:
    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```
    *You can get an API key from [Google AI Studio](https://aistudio.google.com/).*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤖 AI Chatbot Details

The chatbot uses a dedicated API route (`app/api/chat/route.ts`) to handle interactions secureley.
-   **System Prompt:** The AI is fed a structured JSON version of my resume to ensure accurate and relevant responses.
-   **Model:** Uses `gemini-pro` for high-quality text generation.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Connect with me:**
[LinkedIn](https://linkedin.com/in/tushar-kumar-mishra-1974b124b) | [GitHub](https://github.com/tusharmishra069) | [Email](mailto:tusharmishra069@gmail.com)
