<!-- Copied guidance for AI coding agents tailored to the AniMatch repo -->
# Copilot / AI Agent Instructions — AniMatch

Keep guidance short and actionable. Only implement or modify code that is consistent with existing patterns in this repository.

1) Big-picture architecture
- **Frontend:** React + TypeScript + Vite at `frontend/Ani-match`. Routes and UI live under `src/pages` and reusable pieces under `src/components`.
- **Backend:** Flask-based APIs in `backend/` (files like `app.py`, `api_search.py`, `api_home.py`, etc.). The backend exposes JSON endpoints consumed by the frontend (examples: `/login`, `/api/signup`, `/api/search`, `/api/adopt`).
- **Data:** MySQL-compatible databases. DB connections appear in `backend/db.py` and `backend/api_search.py` (note: two different DB client libraries are present in the codebase).

2) How to run & common developer commands (Windows PowerShell)
- Frontend dev server:
  - `cd frontend/Ani-match`
  - `npm install`
  - `npm run dev` (or `npm start`)
- Frontend build & preview:
  - `npm run build`
  - `npm run preview`
- Backend (recommended for local dev using Flask CLI):
  - From repo root in PowerShell:
    - `$env:FLASK_APP = "backend.app"; $env:FLASK_ENV = "development"; python -m flask run --port 5000`
  - Alternatively create a small run script if continuous running is required.

3) Important repository-specific details & gotchas
- Hard-coded DB credentials exist in `backend/db.py` and `backend/api_search.py`. Treat these as secrets and move them to a `.env` file (the repo already lists `python-dotenv` in `backend/requirements.txt`). Use environment variables like `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME` and load them with `dotenv`.
- Inconsistent DB clients: some files use `mysql.connector` (`backend/app.py`) while others use `pymysql` (`backend/db.py`, `backend/api_search.py`). Prefer normalizing to one client (or a thin data-access layer) before wide edits.
- Frontend -> Backend endpoints: the UI calls `http://localhost:5000` in many places (see `src/pages/Signup/Signup.tsx` and `src/pages/Login/Login.tsx`). When changing endpoints, update these files or centralize base URL configuration.
- Routing bug to watch for: `frontend/Ani-match/src/App.tsx` currently imports `Search` from `lucide-react` and mounts it at `Route path="/search"` (this places an icon component instead of the page). The expected page component is `SearchResult` in `src/pages/Search/SearchResult.tsx`.

4) Patterns & conventions discovered in code
- Component layout: pages under `src/pages/*`, with one folder per page and a CSS alongside the TSX file (e.g., `pages/Signup/Signup.tsx` + `Signup.css`). Follow this pattern for new pages.
- API call style: the frontend uses `axios` with absolute URLs (no central client file). If you add API calls, prefer reusing existing `axios` usage or introduce a small `src/api` wrapper and update callers.
- Multi-version components: there are duplicates (e.g., `PetProfile` and `PetProfile2`). Check which is actually routed before removing or changing behavior.

5) Tests & linting
- Frontend has `npm run lint` and `npm run type-check`. Use these locally before opening PRs.
- There are no automated tests in the repo; avoid adding broad refactors without manual verification in the dev server.

6) When editing code — practical rules for AI changes
- Small, focused changes only: prefer minimal diffs that are easy to review and run locally.
- Don’t commit secrets: if you find credentials, replace them with env variable lookups and add a comment referencing `.env` keys.
- Normalize behavior before mass edits: if you change DB client types, update a single helper (`backend/db.py`) and migrate callers.
- Follow existing CSS + component layout conventions — new pages should include a CSS file adjacent to the component.

7) Files to inspect for context (start here)
- `backend/app.py`, `backend/api_search.py`, `backend/db.py`
- `frontend/Ani-match/package.json`, `frontend/Ani-match/src/App.tsx`, `frontend/Ani-match/src/pages/*`, `frontend/Ani-match/src/components/*`

8) Example quick fixes an agent can do safely
- Fix route mounting bug in `src/App.tsx`: replace the icon-based `<Route path="/search" element={<Search />} />` with `<Route path="/search" element={<SearchResult />} />`.
- Replace hard-coded DB credentials in `backend/db.py` with `os.getenv(...)` and document required `.env` keys in `backend/.env.example`.

If anything above is unclear or you'd like the instructions to include extra run/debug examples (e.g. Docker, unit test commands), tell me which area to expand and I'll iterate.
