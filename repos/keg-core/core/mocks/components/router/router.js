import React from 'react'
import { View } from 'react-native'

export const Route = jest.fn(config => {
  return <View></View>
})

export const Routes = jest.fn(config => {
  return <View></View>
})

export const mockLocation = jest.fn(({ search }) => {
  return () => {
    return { search }
  }
})
