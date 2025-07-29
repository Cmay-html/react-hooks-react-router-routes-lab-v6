import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup();
})

// Mock data
const mockMovies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 2,
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"]
  },
  {
    id: 3,
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"]
  }
];

const mockActors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"]
  },
  {
    name: "Justin Timberlake", 
    movies: ["Trolls", "Friends with Benefits", "The Social Network"]
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"]
  },
  {
    name: "Tom Cruise",
    movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"]
  }
];

const mockDirectors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"]
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"]
  },
  {
    name: "Edward Zwick", 
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"]
  }
];

// Mock fetch globally
global.fetch = vi.fn((url) => {
  if (url.includes('/movies/1')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovies[0])
    });
  }
  if (url.includes('/movies')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovies)
    });
  }
  if (url.includes('/actors')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockActors)
    });
  }
  if (url.includes('/directors')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockDirectors)
    });
  }
  return Promise.reject(new Error('Not found'));
});
