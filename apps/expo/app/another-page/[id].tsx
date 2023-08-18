import { AnotherPageScreen } from 'app/features/another-page/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Another Page',
        }}
      />
      <AnotherPageScreen />
    </>
  )
}
