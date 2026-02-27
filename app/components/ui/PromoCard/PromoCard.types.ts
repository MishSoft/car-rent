export interface PromoCardProps {
  title: string;
  description: string;
  image: string;
  bgImage: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary' | undefined;
  className?: string;
}
