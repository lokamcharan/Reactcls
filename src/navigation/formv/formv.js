

const FormV=()=>{
    return(
        <>
        <form className="row g-3 needs-validation" noValidate="">
  <div className="col-md-4">
    <div className="form-outline" data-mdb-input-init="">
      <input
        type="text"
        className="form-control"
        id="validationCustom01"
        defaultValue="Mark"
        required=""
        placeholder="First Name"
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-outline" data-mdb-input-init="">
      <input
        type="text"
        className="form-control"
        id="validationCustom02"
        defaultValue="Otto"
        required=""
        placeholder="Last Name"
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="input-group form-outline" data-mdb-input-init="">
      {/* <span className="input-group-text" id="inputGroupPrepend">
        @
      </span> */}
      <input
        type="text"
        className="form-control"
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend"
        required=""
        placeholder="Email"
      />
      
      <div className="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-outline" data-mdb-input-init="">
      <input
        type="text"
        className="form-control"
        id="validationCustom03"
        required=""
        placeholder="City"
      />
      
      <div className="invalid-feedback">Please provide a valid city.</div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-outline" data-mdb-input-init="">
      <input
        type="text"
        className="form-control"
        id="validationCustom05"
        required=""
        placeholder="Zip"
      />
      
      <div className="invalid-feedback">Please provide a valid zip.</div>
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue=""
        id="invalidCheck"
        required=""
      />
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" data-mdb-ripple-init="">
      Submit form
    </button>
  </div>
</form>

        </>
    )
}
export default FormV