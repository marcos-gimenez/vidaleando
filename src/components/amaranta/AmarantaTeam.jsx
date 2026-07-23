import React from 'react'

export function AmarantaTeam({ team }) {
  return (
    <section className="amaranta-section amaranta-team" id="amaranta-equipo" aria-labelledby="amaranta-team-title">
      <h2 id="amaranta-team-title">EQUIPO ARTÍSTICO</h2>
      <div className="amaranta-credits">
        {team.map((credit) => (
          <div key={credit.role}>
            <h3>{credit.role}</h3>
            <p>{credit.names.map((name) => <span key={name}>{name}</span>)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
