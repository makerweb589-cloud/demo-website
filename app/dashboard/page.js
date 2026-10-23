"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

function getStatus(request) {
  const value = String(request?.status || request?.state || "pending").toLowerCase();
  return value.includes("complete") || value.includes("approved") ? "completed" : "pending";
}

export default function DashboardPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const loadRequests = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/demo-requests", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Could not load demo requests.");
      }
      const list = Array.isArray(data) ? data : (data.requests || data.data || data.items || []);
      setRequests(Array.isArray(list) ? list : []);
    } catch (err) {
      setError(err?.message || "Could not load demo requests. Please try again.");
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadRequests(); }, [loadRequests]);

  const stats = useMemo(() => {
    const completed = requests.filter((item) => getStatus(item) === "completed").length;
    return { total: requests.length, completed, pending: requests.length - completed };
  }, [requests]);

  const visibleRequests = useMemo(() => {
    if (filter === "all") return requests;
    return requests.filter((item) => getStatus(item) === filter);
  }, [requests, filter]);

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link href="/" className="brand dashboard-brand"><span className="brand-icon">N</span> nexa<span className="brand-dot">.</span></Link>
        <p className="sidebar-label">WORKSPACE</p>
        <Link className="sidebar-link active" href="/dashboard"><span aria-hidden="true">▦</span> Dashboard</Link>
        <a className="sidebar-link" href="#overview"><span aria-hidden="true">◫</span> Overview</a>
        <Link className="sidebar-link" href="/"><span aria-hidden="true">⌂</span> Home</Link>
        <div className="sidebar-bottom">
          <div className="profile-avatar">N</div>
          <div><strong>Nexa Workspace</strong><span>Demo dashboard</span></div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="section-label">YOUR WORKSPACE</span>
            <h1>Dashboard</h1>
            <p>Review and manage incoming demo requests.</p>
          </div>
          <button className="button button-dark refresh-button" type="button" onClick={loadRequests} disabled={loading}>
            {loading ? "Refreshing…" : "Refresh ↻"}
          </button>
        </header>

        <section className="dashboard-banner">
          <div>
            <span>WELCOME BACK</span>
            <h2>Your business at a glance.</h2>
            <p>Track demo enquiries and keep an eye on the latest requests.</p>
          </div>
          <div className="banner-symbol" aria-hidden="true">✳</div>
        </section>

        <section className="stats-grid" id="overview" aria-label="Request overview">
          <article className="stat-card"><span>Total requests</span><strong>{loading ? "—" : stats.total}</strong><small>All received enquiries</small></article>
          <article className="stat-card"><span>Pending</span><strong>{loading ? "—" : stats.pending}</strong><small>Awaiting follow-up</small></article>
          <article className="stat-card"><span>Completed</span><strong>{loading ? "—" : stats.completed}</strong><small>Marked as completed</small></article>
        </section>

        <section className="requests-panel" id="requests">
          <div className="requests-heading">
            <div><h2>Demo requests</h2><p>Requests submitted through the Nexa website.</p></div>
            <label className="dashboard-filter">
              <span className="sr-only">Filter requests</span>
              <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="all">All requests</option><option value="pending">Pending</option><option value="completed">Completed</option>
              </select>
            </label>
          </div>

          {error && <div className="dashboard-error" role="alert">{error}</div>}
          {loading ? (
            <div className="dashboard-empty"><span>…</span><h3>Loading requests</h3><p>Please wait while the latest requests are fetched.</p></div>
          ) : !error && visibleRequests.length === 0 ? (
            <div className="dashboard-empty"><span>✳</span><h3>No requests found</h3><p>{filter === "all" ? "New demo requests will appear here when submitted." : `There are no ${filter} requests right now.`}</p><button className="button" type="button" onClick={() => setFilter("all")}>Show all requests</button></div>
          ) : (
            <div className="table-scroll">
              <table>
                <thead><tr><th>NAME</th><th>EMAIL</th><th>COMPANY</th><th>MESSAGE</th><th>STATUS</th><th>SUBMITTED</th></tr></thead>
                <tbody>
                  {visibleRequests.map((item, index) => {
                    const status = getStatus(item);
                    return <tr key={item.id || item.requestId || item.createdAt || index}>
                      <td>{item.name || item.fullName || "—"}</td>
                      <td>{item.email || "—"}</td>
                      <td>{item.company || "—"}</td>
                      <td className="request-message">{item.message || item.description || "—"}</td>
                      <td><span className={`status-pill ${status === "completed" ? "status-completed" : "status-pending"}`}>{status === "completed" ? "COMPLETED" : "PENDING"}</span></td>
                      <td>{formatDate(item.createdAt || item.created_at || item.timestamp || item.submittedAt)}</td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <p className="dashboard-disclaimer">This dashboard displays the records returned by your existing <code>/api/demo-requests</code> endpoint. Status updates require API support.</p>
      </main>
    </div>
  );
}


function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

function getStatus(request) {
  const value = String(request?.status || request?.state || "pending").toLowerCase();
  return value.includes("complete") || value.includes("approved") ? "completed" : "pending";
}

export default function DashboardPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const loadRequests = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/demo-requests", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Could not load demo requests.");
      }
      const list = Array.isArray(data) ? data : (data.requests || data.data || data.items || []);
      setRequests(Array.isArray(list) ? list : []);
    } catch (err) {
      setError(err?.message || "Could not load demo requests. Please try again.");
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadRequests(); }, [loadRequests]);

  const stats = useMemo(() => {
    const completed = requests.filter((item) => getStatus(item) === "completed").length;
    return { total: requests.length, completed, pending: requests.length - completed };
  }, [requests]);

  const visibleRequests = useMemo(() => {
    if (filter === "all") return requests;
    return requests.filter((item) => getStatus(item) === filter);
  }, [requests, filter]);

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link href="/" className="brand dashboard-brand"><span className="brand-icon">N</span> nexa<span className="brand-dot">.</span></Link>
        <p className="sidebar-label">WORKSPACE</p>
        <Link className="sidebar-link active" href="/dashboard"><span aria-hidden="true">▦</span> Dashboard</Link>
        <a className="sidebar-link" href="#overview"><span aria-hidden="true">◫</span> Overview</a>
        <Link className="sidebar-link" href="/"><span aria-hidden="true">⌂</span> Home</Link>
        <div className="sidebar-bottom">
          <div className="profile-avatar">N</div>
          <div><strong>Nexa Workspace</strong><span>Demo dashboard</span></div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="section-label">YOUR WORKSPACE</span>
            <h1>Dashboard</h1>
            <p>Review and manage incoming demo requests.</p>
          </div>
          <button className="button button-dark refresh-button" type="button" onClick={loadRequests} disabled={loading}>
            {loading ? "Refreshing…" : "Refresh ↻"}
          </button>
        </header>

        <section className="dashboard-banner">
          <div>
            <span>WELCOME BACK</span>
            <h2>Your business at a glance.</h2>
            <p>Track demo enquiries and keep an eye on the latest requests.</p>
          </div>
          <div className="banner-symbol" aria-hidden="true">✳</div>
        </section>

        <section className="stats-grid" id="overview" aria-label="Request overview">
          <article className="stat-card"><span>Total requests</span><strong>{loading ? "—" : stats.total}</strong><small>All received enquiries</small></article>
          <article className="stat-card"><span>Pending</span><strong>{loading ? "—" : stats.pending}</strong><small>Awaiting follow-up</small></article>
          <article className="stat-card"><span>Completed</span><strong>{loading ? "—" : stats.completed}</strong><small>Marked as completed</small></article>
        </section>

        <section className="requests-panel" id="requests">
          <div className="requests-heading">
            <div><h2>Demo requests</h2><p>Requests submitted through the Nexa website.</p></div>
            <label className="dashboard-filter">
              <span className="sr-only">Filter requests</span>
              <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="all">All requests</option><option value="pending">Pending</option><option value="completed">Completed</option>
              </select>
            </label>
          </div>

          {error && <div className="dashboard-error" role="alert">{error}</div>}
          {loading ? (
            <div className="dashboard-empty"><span>…</span><h3>Loading requests</h3><p>Please wait while the latest requests are fetched.</p></div>
          ) : !error && visibleRequests.length === 0 ? (
            <div className="dashboard-empty"><span>✳</span><h3>No requests found</h3><p>{filter === "all" ? "New demo requests will appear here when submitted." : `There are no ${filter} requests right now.`}</p><button className="button" type="button" onClick={() => setFilter("all")}>Show all requests</button></div>
          ) : (
            <div className="table-scroll">
              <table>
                <thead><tr><th>NAME</th><th>EMAIL</th><th>COMPANY</th><th>MESSAGE</th><th>STATUS</th><th>SUBMITTED</th></tr></thead>
                <tbody>
                  {visibleRequests.map((item, index) => {
                    const status = getStatus(item);
                    return <tr key={item.id || item.requestId || item.createdAt || index}>
                      <td>{item.name || item.fullName || "—"}</td>
                      <td>{item.email || "—"}</td>
                      <td>{item.company || "—"}</td>
                      <td className="request-message">{item.message || item.description || "—"}</td>
                      <td><span className={`status-pill ${status === "completed" ? "status-completed" : "status-pending"}`}>{status === "completed" ? "COMPLETED" : "PENDING"}</span></td>
                      <td>{formatDate(item.createdAt || item.created_at || item.timestamp || item.submittedAt)}</td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <p className="dashboard-disclaimer">This dashboard displays the records returned by your existing <code>/api/demo-requests</code> endpoint. Status updates require API support.</p>
      </main>
    </div>
  );
}
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

function getStatus(request) {
  const value = String(request?.status || request?.state || "pending").toLowerCase();
  return value.includes("complete") || value.includes("approved") ? "completed" : "pending";
}

export default function DashboardPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const loadRequests = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/demo-requests", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Could not load demo requests.");
      }
      const list = Array.isArray(data) ? data : (data.requests || data.data || data.items || []);
      setRequests(Array.isArray(list) ? list : []);
    } catch (err) {
      setError(err?.message || "Could not load demo requests. Please try again.");
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadRequests(); }, [loadRequests]);

  const stats = useMemo(() => {
    const completed = requests.filter((item) => getStatus(item) === "completed").length;
    return { total: requests.length, completed, pending: requests.length - completed };
  }, [requests]);

  const visibleRequests = useMemo(() => {
    if (filter === "all") return requests;
    return requests.filter((item) => getStatus(item) === filter);
  }, [requests, filter]);

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link href="/" className="brand dashboard-brand"><span className="brand-icon">N</span> nexa<span className="brand-dot">.</span></Link>
        <p className="sidebar-label">WORKSPACE</p>
        <Link className="sidebar-link active" href="/dashboard"><span aria-hidden="true">▦</span> Dashboard</Link>
        <a className="sidebar-link" href="#overview"><span aria-hidden="true">◫</span> Overview</a>
        <Link className="sidebar-link" href="/"><span aria-hidden="true">⌂</span> Home</Link>
        <div className="sidebar-bottom">
          <div className="profile-avatar">N</div>
          <div><strong>Nexa Workspace</strong><span>Demo dashboard</span></div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="section-label">YOUR WORKSPACE</span>
            <h1>Dashboard</h1>
            <p>Review and manage incoming demo requests.</p>
          </div>
          <button className="button button-dark refresh-button" type="button" onClick={loadRequests} disabled={loading}>
            {loading ? "Refreshing…" : "Refresh ↻"}
          </button>
        </header>

        <section className="dashboard-banner">
          <div>
            <span>WELCOME BACK</span>
            <h2>Your business at a glance.</h2>
            <p>Track demo enquiries and keep an eye on the latest requests.</p>
          </div>
          <div className="banner-symbol" aria-hidden="true">✳</div>
        </section>

        <section className="stats-grid" id="overview" aria-label="Request overview">
          <article className="stat-card"><span>Total requests</span><strong>{loading ? "—" : stats.total}</strong><small>All received enquiries</small></article>
          <article className="stat-card"><span>Pending</span><strong>{loading ? "—" : stats.pending}</strong><small>Awaiting follow-up</small></article>
          <article className="stat-card"><span>Completed</span><strong>{loading ? "—" : stats.completed}</strong><small>Marked as completed</small></article>
        </section>

        <section className="requests-panel" id="requests">
          <div className="requests-heading">
            <div><h2>Demo requests</h2><p>Requests submitted through the Nexa website.</p></div>
            <label className="dashboard-filter">
              <span className="sr-only">Filter requests</span>
              <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="all">All requests</option><option value="pending">Pending</option><option value="completed">Completed</option>
              </select>
            </label>
          </div>

          {error && <div className="dashboard-error" role="alert">{error}</div>}
          {loading ? (
            <div className="dashboard-empty"><span>…</span><h3>Loading requests</h3><p>Please wait while the latest requests are fetched.</p></div>
          ) : !error && visibleRequests.length === 0 ? (
            <div className="dashboard-empty"><span>✳</span><h3>No requests found</h3><p>{filter === "all" ? "New demo requests will appear here when submitted." : `There are no ${filter} requests right now.`}</p><button className="button" type="button" onClick={() => setFilter("all")}>Show all requests</button></div>
          ) : (
            <div className="table-scroll">
              <table>
                <thead><tr><th>NAME</th><th>EMAIL</th><th>COMPANY</th><th>MESSAGE</th><th>STATUS</th><th>SUBMITTED</th></tr></thead>
                <tbody>
                  {visibleRequests.map((item, index) => {
                    const status = getStatus(item);
                    return <tr key={item.id || item.requestId || item.createdAt || index}>
                      <td>{item.name || item.fullName || "—"}</td>
                      <td>{item.email || "—"}</td>
                      <td>{item.company || "—"}</td>
                      <td className="request-message">{item.message || item.description || "—"}</td>
                      <td><span className={`status-pill ${status === "completed" ? "status-completed" : "status-pending"}`}>{status === "completed" ? "COMPLETED" : "PENDING"}</span></td>
                      <td>{formatDate(item.createdAt || item.created_at || item.timestamp || item.submittedAt)}</td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <p className="dashboard-disclaimer">This dashboard displays the records returned by your existing <code>/api/demo-requests</code> endpoint. Status updates require API support.</p>
      </main>
    </div>
  );
}
