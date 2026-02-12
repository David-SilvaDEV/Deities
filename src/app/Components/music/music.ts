import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Track {
  name: string;
  artist: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrls: ['./music.css']
})
export class MusicComponent {

  tracks: Track[] = [

    // 🎵 TRACKS
    {
      name: 'Track 1',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e024bb5295733654c8b824a5711',
      url: 'https://open.spotify.com/track/0M2lyhKq2ty2sJyx5vjuIa'
    },
    {
      name: 'Track 2',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e021f69ccfddc1b7f9600921022',
      url: 'https://open.spotify.com/track/0OoDKXuR7BcEEq4d1ZafpZ'
    },
    {
      name: 'Track 3',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e02014d6757eb53e773e52c78e9',
      url: 'https://open.spotify.com/track/4P4aO6Rqkt9cdd3PQdYtoC'
    },
    {
      name: 'Track 4',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e0210eccdaedf354b4d9bf8b9fb',
      url: 'https://open.spotify.com/track/0qxa8R5h4DOWFir5n5geCB'
    },
    {
      name: 'Track 5',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e0212780912dd4c57b965fe1880',
      url: 'https://open.spotify.com/track/3GgpkE4kbbVTocd7HSGpVd'
    },
    {
      name: 'Track 6',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e0234dcce6260d314cf80e121f6',
      url: 'https://open.spotify.com/track/3Iv2pehJHyprlsFHPYVbSM'
    },
    {
      name: 'Track 7',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e027f97fd5f0aee2d3671325fde',
      url: 'https://open.spotify.com/track/4YxXKrwrJqxni0Epm5guMd'
    },
    {
      name: 'Track 8',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e0245ca1c45f665dbb890cf797b',
      url: 'https://open.spotify.com/track/2w0qH2MThWOeOasVRmOe8n'
    },
    {
      name: 'Track 9',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e02860e56a04ab0337aaea3389d',
      url: 'https://open.spotify.com/track/64WzlUF2phTH6T7msz87Dm'
    },
    {
      name: 'Track 10',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e020eafd7073351168aa938885c',
      url: 'https://open.spotify.com/track/1GkPEj029uD460zptbAPZL'
    },
    {
      name: 'Track 11',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e0245af918c899ed5bc54f683a9',
      url: 'https://open.spotify.com/track/4o8ha55JAt6WKsJ6OUd6Mk'
    },
    {
      name: 'Track 12',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e02a37114f22c94c5faeddf5b3a',
      url: 'https://open.spotify.com/track/4gHYPoxZHZCnquKe1tEmuS'
    },

    // 💿 ALBUMS
    {
      name: 'Album 1',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d0000b2734c85f82e43341fdbd59f1d0f',
      url: 'https://open.spotify.com/album/7eyYVjNCoMwc1tWlnPf6FQ'
    },
    {
      name: 'Album 2',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e02e45b61d7bb40b07bc440565b',
      url: 'https://open.spotify.com/album/6XZzEwAz78xx4R7nDn0hLa'
    },
    {
      name: 'Album 3',
      artist: 'Tu Artista',
      image: 'https://i.scdn.co/image/ab67616d00001e02b331584e3708f9bf47ba95e1',
      url: 'https://open.spotify.com/album/6cqzmnONuLvulOKIsc9b2c'
    }

  ];

}
