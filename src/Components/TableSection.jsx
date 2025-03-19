import React from 'react'

const TableSection = () => {
  return (
    <section className="container py-5 mt-3">
    <div className="text-center">
      <h3 className="fw-bold">Farkı keşfet</h3>
      <p className="fw-small">Premium'a geç ve dinleyeceğine yalnızca sen karar ver. İstediğin zaman iptal et.</p>
    </div>
    <div className="mt-5">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Elde edeceğin avantajlar</th>
            <th scope="col">Spotify'ın
              Free planı</th>
            <th scope="col"> <i className="bi bi-spotify"></i>
              Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reklamsız müzik dinle</td>
            <td>--</td>
            <td><i className="bi bi-check-circle-fill"></i></td>
          </tr>
          <tr>
            <td>İndir ve çevrimdışı dinle</td>
            <td>--</td>
            <td><i className="bi bi-check-circle-fill"></i></td>
          </tr>
          <tr>
            <td>Şarkıları istediğin sırada çal</td>
            <td>--</td>
            <td><i className="bi bi-check-circle-fill"></i></td>
          </tr>
          <tr>
            <td>Arkadaşlarınla aynı anda dinle</td>
            <td>--</td>
            <td><i className="bi bi-check-circle-fill"></i></td>
          </tr>
          <tr>
            <td>Yüksek ses kalitesi</td>
            <td>--</td>
            <td><i className="bi bi-check-circle-fill"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  )
}

export default TableSection