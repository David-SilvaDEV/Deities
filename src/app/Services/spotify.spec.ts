import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // 👉 pega aquí tu token de Spotify
  private token = 'TU_TOKEN_AQUI';

  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  // 🔐 Headers con autorización
  private getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }

  // 🎵 Obtener un sencillo por ID
  getTrack(trackId: string) {
    return this.http.get<any>(
      `${this.apiUrl}/tracks/${trackId}`,
      { headers: this.getHeaders() }
    );
  }

  // 🎵 Obtener varios sencillos en una sola petición (MEJOR opción)
  getSeveralTracks(trackIds: string[]) {
    const ids = trackIds.join(',');

    return this.http.get<any>(
      `${this.apiUrl}/tracks?ids=${ids}`,
      { headers: this.getHeaders() }
    );
  }
}
