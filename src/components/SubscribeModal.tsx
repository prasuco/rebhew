

export const SubscribeModal = () => {
  return (
    <div>
      <h2 className='text-center text-2xl font-semibold'>
        Join our Waitlist
      </h2>
      <form action="https://forminit.com/f/lea8hdeo1i7/" method='POST' className='flex flex-col gap-2'>
        <fieldset className="d-fieldset">
          <legend className="d-fieldset-legend ">What is your name?</legend>
          <input name="name" type="text" className="d-input w-full" placeholder="Your name please" />
        </fieldset>

        <fieldset className="d-fieldset">
          <legend className="d-fieldset-legend ">What is your email?</legend>
          <input name="email" type="email" className="d-input w-full" placeholder="Your Best Email" />
        </fieldset>

        <button type="submit" className="d-btn d-btn-neutral ">
          Submit
        </button>
      </form>
    </div>
  )
}
