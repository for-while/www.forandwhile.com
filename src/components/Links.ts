export interface LinksState {
  email: string
}

export default function Links(): LinksState {
  const email = 'moc.elihwdnarof@olleh'.split('').reverse().join('')

  return {
    email,
  }
}
