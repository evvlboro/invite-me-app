import { Button, Text, Header } from '@/components/ui'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="space-y-6 text-center">
        <Header level={1} centered>
          Invite Me
        </Header>
        <Text variant="lead" className="mx-auto max-w-md">
          Создавай формы для записи на мероприятия за 1 минуту
        </Text>
        <div className="flex justify-center gap-4">
          <Button href="/register" variant="primary">
            Начать
          </Button>
          <Button href="/register" variant="secondary">
            Войти
          </Button>
        </div>
      </div>
    </div>
  )
}
