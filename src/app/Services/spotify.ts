import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQCKGOW9YpLHJPOr3OMraP9fp2vlHlTdwNXUls2EKNsclgcs_lI93-zLL0Ax83HtoXGXAZ7YEBNgIIwIBlCTyuurxTmHn4tbWg5XYqcDV765IqhJ_NGGxLesoUyGkeV0-zS6J9kQMSuWmAElzvqSMOGsjvV5pnxi9TysQtvvfuzs-i91f_bS05WP6iUvD4Oaq4XKBoiPWe39hnPLe-XT3JF4NxXXcI_nqvo1XOTc-sl6zp13GY09-nbN7crCmwilD_Ny-umLHnE5ZtkxqKeOWb3APkNTTN-LhXn-M3EhdQMt0zO5TEhqBLD9RuYdOkLCSLa4'; // pon aquí el token que te dio Spotify

  constructor(private http: HttpClient) {}

  // Obtener varios tracks por ID
  getSeveralTracks(ids: string[]): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const idsParam = ids.join(',');
    return this.http.get(`https://api.spotify.com/v1/tracks?ids=${idsParam}`, { headers });
  }
}
