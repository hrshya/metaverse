
export const GradientEffect = () => {
  return (
    <div className="relative">
        <div className="absolute top-8 left-72 h-96 w-96 rounded-full bg-gradient-to-r from-gradientSecondary to-gradientRight blur-2xl">

        </div>
        <div className="absolute top-40 left-8 h-96 w-96 rounded-full bg-gradient-to-r from-gradientLeft to-gradientSecondary blur-2xl">

        </div>
    </div>
  )
}
