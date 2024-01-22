import React from 'react'
import SearchField from '../components/SearchField'
import { useAppSelector } from '../app/hooks'
import Preloader from '../components/Preloader'
import FilmList from '../components/FilmList'

export default function Searching() {
  const { loading } = useAppSelector(state => state.search)
  return (
    <>
      <SearchField />
      {
        loading ? <Preloader /> : <FilmList />
      }
    </>
  )
}
