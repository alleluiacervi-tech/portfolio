# ADR-0001: Separate UI Changes from Ops/Docs Commits

- Status: Accepted
- Date: 2026-02-17

## Context

Recent contribution flow includes batches of non-UI commits for repository hygiene, automation, and process quality. Mixing those with UI modifications makes review and rollback harder.

## Decision

Keep UI changes in dedicated commits and keep operations/docs/configuration changes in separate commits.

## Consequences

- Easier code review by domain (UI vs non-UI)
- Lower risk rollback for automation/documentation updates
- Clearer release notes and change tracking

## Alternatives Considered

- Mixed commits with both UI and non-UI changes
  - Rejected: reduces traceability and complicates testing scope.

## Follow-up

- Continue using focused, atomic commits.
- Keep process docs and CI updates in non-UI commit groups.
