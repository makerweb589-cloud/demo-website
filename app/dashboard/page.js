"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function OutlineIcon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: "false"
  };

  switch (name) {
    case "overview":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );

    case "requests":
      return (
        <svg {...common}>
          <rect x="5" y="3.5" width="14" height="17" rx="2" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
          <path d="M9 16h3.5" />
        </svg>
      );

    case "about":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
        </svg>
      );

    default:
      return null;
  }
}

export default function DashboardPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("overview");

  async function loadRequests() {
    try {
      const response = await fetch("/api/demo-requests", {
        cache: "no-store"
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Unable to load demo requests.");
      }

      setRequests(
        Array.isArray(data.requests) ? data.requests : []
      );
      setError("");
    } catch {
      setError("Could not load requests. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  useEffect(() => {
    function updateActiveSection() {
      if (window.location.hash === "#requests") {
        setActiveSection("requests");
      } else {
        setActiveSection("overview");
      }
    }

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  function selectOverview() {
    setActiveSection("overview");
  }

  function selectRequests(event) {
    event.preventDefault();
    setActiveSection("requests");

    window.history.replaceState(null, "", "#requests");

    document.getElementById("requests")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const completed = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  function formatDate(date) {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }

  return (
    <main className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link href="/" className="brand dashboard-brand">
          <span className="brand-icon">N</span>
          nexa<span className="brand-dot">.</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

        <nav
          className="dashboard-nav"
          aria-label="Dashboard navigation"
        >
          <Link
            href="/dashboard#overview"
            className={`sidebar-link ${
              activeSection === "overview" ? "active" : ""
            }`}
            aria-current={
              activeSection === "overview" ? "page" : undefined
            }
            onClick={selectOverview}
          >
            <OutlineIcon name="overview" />
            <span className="sidebar-link-text">Overview</span>
          </Link>

          <a
            href="#requests"
            className={`sidebar-link ${
              activeSection === "requests" ? "active" : ""
            }`}
            aria-current={
              activeSection === "requests" ? "location" : undefined
            }
            onClick={selectRequests}
          >
            <OutlineIcon name="requests" />
            <span className="sidebar-link-text">Demo Requests</span>
          </a>

          <Link
            href="/about"
            className="sidebar-link"
          >
            <OutlineIcon name="about" />
            <span className="sidebar-link-text">About</span>
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">N</div>

          <div className="sidebar-profile-info">
            <strong>Demo Workspace</strong>
            <span>Preview mode</span>
          </div>
        </div>
      </aside>

      <section className="dashboard-main">
        <header
          className="dashboard-header"
          id="overview"
        >
          <div>
            <span className="section-label">
              WORKSPACE / OVERVIEW
            </span>
            <h1>Dashboard</h1>
            <p>Welcome to your business overview.</p>
          </div>

          <Link href="/#demo" className="button button-dark">
            New demo request
          </Link>
        </header>

        <div className="dashboard-banner">
          <div>
            <span>YOUR WORKSPACE</span>
            <h2>A clearer view of what&apos;s next.</h2>
            <p>
              Review incoming demo enquiries and track their status.
            </p>
          </div>

          <div className="banner-symbol" aria-hidden="true">
            ✳
          </div>
        </div>

        <div className="stats-grid">
          <article className="stat-card">
            <span>Total Requests</span>
            <strong>{loading ? "—" : requests.length}</strong>
            <small>All submitted enquiries</small>
          </article>

          <article className="stat-card">
            <span>Pending</span>
            <strong>{loading ? "—" : pending}</strong>
            <small>Awaiting review</small>
          </article>

          <article className="stat-card">
            <span>Completed</span>
            <strong>{loading ? "—" : completed}</strong>
            <small>Marked as completed</small>
          </article>
        </div>

        <section
          className="requests-panel"
          id="requests"
        >
          <div className="requests-heading">
            <div>
              <h2>Recent Requests</h2>
              <p>
                Latest demo enquiries submitted through the website.
              </p>
            </div>

            <button
              type="button"
              className="refresh-button"
              onClick={() => {
                setLoading(true);
                loadRequests();
              }}
            >
              Refresh
            </button>
          </div>

          {error && (
            <p className="dashboard-error" role="alert">
              {error}
            </p>
          )}

          {loading ? (
            <div className="dashboard-empty" aria-live="polite">
              Loading requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="dashboard-empty">
              <OutlineIcon name="requests" size={28} />
              <h3>No requests yet</h3>
              <p>
                Demo requests submitted through the home page
                will appear here when available.
              </p>

              <Link href="/#demo" className="text-link">
                Submit a demo request →
              </Link>
            </div>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>REQUEST</th>
                    <th>CONTACT</th>
                    <th>COMPANY</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id}>
                      <td>
                        <strong>{request.name}</strong>
                        <small>{request.id}</small>
                      </td>

                      <td>{request.email}</td>

                      <td>{request.company || "—"}</td>

                      <td>{formatDate(request.createdAt)}</td>

                      <td>
                        <span
                          className={`status-pill ${
                            request.status === "Completed"
                              ? "status-completed"
                              : "status-pending"
                          }`}
                        >
                          {request.status || "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <p className="dashboard-disclaimer">
          Demo dashboard. Authentication and persistent database
          storage have not yet been configured.
        </p>
      </section>
    </main>
  );
}
