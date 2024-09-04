import { TagContainer } from './styles'

export type Props = {
  size?: 'smal' | 'big'
  children: string
}

const Tag = ({ children, size = 'smal' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
