import { CartDetailsInterface } from 'src/components/modules/CartModule/interface'

export interface RepoCardProps extends CartDetailsInterface {
  deleteCartHandler: (appId: string) => void
}
