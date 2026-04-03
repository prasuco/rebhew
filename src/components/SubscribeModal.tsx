export const SubscribeModal = () => {
  return (
    <div>
      <h2 className='text-center text-2xl font-semibold'>
        Join our Waitlist
      </h2>
      <form action="https://api.web3forms.com/submit" method='POST' className='flex flex-col gap-2'>
        <input type="hidden" name="access_key" value="951f97d2-662c-4c34-80c4-cfac2beaeb8a" />

        <fieldset className="d-fieldset">
          <legend className="d-fieldset-legend ">What is your name?</legend>
          <input name="name" type="text" className="d-input w-full" placeholder="Your name please" />
        </fieldset>
        <fieldset className="d-fieldset">
          <legend className="d-fieldset-legend ">What is your phone no?</legend>
          <input name="phone" type="number" className="d-input w-full" placeholder="Your Phone Number" />
        </fieldset>

        <fieldset className="d-fieldset">
          <legend className="d-fieldset-legend ">What is your email?</legend>
          <input name="email" type="email" className="d-input w-full" placeholder="Your Best Email (optional)" />
        </fieldset>

        <button type="submit" className="d-btn d-btn-neutral ">
          Submit
        </button>
      </form>
    </div>
  )
}
