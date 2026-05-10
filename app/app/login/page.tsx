import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function login(formData: FormData) {
  'use server'
  const raw = (formData.get('password') as string) ?? ''
  const normalized = raw.trim().replace(/\s+/g, '').toLowerCase()
  if (normalized === 'happymothersday') {
    const cookieStore = await cookies()
    cookieStore.set('auth', 'happymothersday', {
      httpOnly: true,
      path: '/',
      sameSite: 'strict',
    })
    redirect('/')
  }
  redirect('/login?error=1')
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fdf6e3',
        fontFamily: 'var(--font-lora), Georgia, serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '22rem',
          textAlign: 'center',
        }}
      >

        <p
          style={{
            color: '#7a6552',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            lineHeight: 1.7,
          }}
        >
          Please use the password to open the book.
        </p>

<form action={login} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #c9aa87',
              borderRadius: '2px',
              backgroundColor: '#fdf0d8',
              color: '#3d2b1f',
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: '1rem',
              textAlign: 'center',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          {error && (
            <p
              style={{
                color: '#9b3a3a',
                fontSize: '0.85rem',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              Incorrect password — please try again.
            </p>
          )}

          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#c2956b',
              color: '#fdf6e3',
              border: 'none',
              borderRadius: '2px',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              cursor: 'pointer',
            }}
          >
            Open the Book
          </button>
        </form>

        <div style={{ marginTop: '2.5rem' }}>
          <span style={{ color: '#c2956b', fontSize: '0.65rem', letterSpacing: '0.5rem' }}>
            ✦ ❧ ✦
          </span>
        </div>
      </div>
    </div>
  )
}
