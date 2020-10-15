import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function AnotherPage() {
  return (
    <div className="container">
      <main>
        <Header title="gumbo" />
        <p className="description">
          You think. <code>It is you.</code>
        </p>
        <Link href="/">
          <a>go back</a>
        </Link>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          color: blue;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
