
export function Signin() {
  return (
    <>
      <form action="">
        <div className="form-control w-screen max-w-xs mb-6">
          <label className="label-text mb-1 ml-1" htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-screen max-w-xs mb-6">
          <label className="label-text mb-1  ml-1" htmlFor="email">Email : </label>
          <input type="text" name="email" id="email" className="input input-bordered w-full max-w-xs" />
        </div>
      </form>
    </>
  )
}