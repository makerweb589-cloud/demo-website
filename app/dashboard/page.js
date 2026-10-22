"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadRequests() {
    try {
      const response = await fetch("/api/demo-requests", {
        cache: "no-store"
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Unable to load demo requests.");
      }

      setRequests(data.requests);
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

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const completed = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
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

        <Link href="/dashboard" className="sidebar-link active">
          <span>▦</span>
          Overview
        </Link>

        <a href="#requests" className="sidebar-link">
          <span>☷</span>
          Demo Requests
        </a>

        <Link href="/about" className="sidebar-link">
          <span>ⓘ</span>
          About
        </Link>

        <div className="sidebar-bottom">
          <div className="profile-avatar">N</div>

          <div>
            <strong>Demo Workspace</strong>
            <span>Preview mode</span>
          </div>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="section-label">WORKSPACE / OVERVIEW</span>
            <h1>Dashboard</h1>
            <p>Welcome to your business overview.</p>
          </div>

          <Link href="/#demo" className="button button-dark">
            + New demo request
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

          <div className="banner-symbol">✳</div>
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

        <section className="requests-panel" id="requests">
          <div className="requests-heading">
            <div>
              <h2>Recent Requests</h2>
              <p>Latest demo enquiries submitted through the website.</p>
            </div>

            <button
              className="refresh-button"
              onClick={() => {
                setLoading(true);
                loadRequests();
              }}
            >
              ↻ Refresh
            </button>
          </div>

          {error && <p className="dashboard-error">{error}</p>}

          {loading ? (
            <div className="dashboard-empty">
              Loading requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="dashboard-empty">
              <span>☷</span>
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
                          {request.status}
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
