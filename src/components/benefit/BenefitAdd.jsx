import React from 'react'

export default function BenefitAdd() {
    return (
        <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-9 col-12 mx-auto">
            <div className="card card-body mt-4">
              <h6 className="mb-0">New Benefit</h6>
              <p className="text-sm mb-0">Create new Benefit</p>
              <hr className="horizontal dark my-3"/>
              <label for="projectName" className="form-label">Benefit Title</label>
              <input type="text" className="form-control" id="projectName" onfocus="focused(this)" onfocusout="defocused(this)"/>
              {/* <div className="row mt-4">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>
                      Private Project
                    </label>
                    <p className="form-text text-muted text-xs ms-1">
                      If you are available for hire outside of the current situation, you can encourage others to hire you.
                    </p>
                    <div className="form-check form-switch ms-1">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick="notify(this)" data-type="warning" data-content="Once a project is made private, you cannot revert it to a public project." data-title="Warning" data-icon="ni ni-bell-55"/>
                      <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <label className="mt-4">Project Description</label>
              <p className="form-text text-muted text-xs ms-1">
                This is how others will learn about the project, so make it good!
              </p>
              <div className="ql-toolbar ql-snow"><span className="ql-formats"><span className="ql-header ql-picker"><span className="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon className="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon> <polygon className="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon> </svg></span><span className="ql-picker-options" aria-hidden="true" tabindex="-1" id="ql-picker-options-0"><span tabindex="0" role="button" className="ql-picker-item" data-value="1"></span><span tabindex="0" role="button" className="ql-picker-item" data-value="2"></span><span tabindex="0" role="button" className="ql-picker-item" data-value="3"></span><span tabindex="0" role="button" className="ql-picker-item"></span></span></span><select className="ql-header" style="display: none;"><option value="1"></option><option value="2"></option><option value="3"></option><option selected="selected"></option></select></span><span className="ql-formats"><button type="button" className="ql-bold"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button><button type="button" className="ql-italic"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button><button type="button" className="ql-underline"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect> </svg></button><button type="button" className="ql-link"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line> <path className="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path> <path className="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path> </svg></button></span><span className="ql-formats"><button type="button" className="ql-list" value="ordered"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line> <line className="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line> <line className="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line> <line className="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line> <path className="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path> <path className="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path> <path className="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path> </svg></button><button type="button" className="ql-list" value="bullet"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line> <line className="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line> <line className="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line> <line className="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line> <line className="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line> <line className="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line> </svg></button></span><span className="ql-formats"><button type="button" className="ql-clean"><svg className="" viewBox="0 0 18 18"> <line className="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line> <line className="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line> <line className="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line> <line className="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line> <rect className="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect> </svg></button></span></div><div id="editor" className="ql-container ql-snow"><div className="ql-editor" data-gramm="false" contenteditable="true"><p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br/></p></div><div className="ql-clipboard" contenteditable="true" tabindex="-1"></div><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"/><a className="ql-action"></a><a className="ql-remove"></a></div></div>
              <label className="mt-4 form-label">Project Tags</label>
              <div className="choices" data-type="select-multiple" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" name="choices-multiple-remove-button" id="choices-multiple-remove-button" multiple="" hidden="" tabindex="-1" data-choice="active"><option value="Choice 1">Choice 1</option><option value="Two">Label Two</option></select><div className="choices__list choices__list--multiple"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="Choice 1" data-custom-properties="null" aria-selected="true" data-deletable="">Choice 1<button type="button" className="choices__button" aria-label="Remove item: 'Choice 1'" data-button="">Remove item</button></div><div className="choices__item choices__item--selectable" data-item="" data-id="2" data-value="Two" data-custom-properties="null" aria-selected="true" data-deletable="">Label Two<button type="button" className="choices__button" aria-label="Remove item: 'Two'" data-button="">Remove item</button></div></div><input type="text" className="choices__input choices__input--cloned" autocomplete="off" autoCapitalize="none" spellCheck="false" role="textbox" aria-autocomplete="list" aria-label="false"/></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" aria-multiselectable="true" role="listbox"><div id="choices--choices-multiple-remove-button-item-choice-2" className="choices__item choices__item--choice choices__item--selectable is-highlighted" role="option" data-choice="" data-id="2" data-value="Choice 2" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Choice 2</div><div id="choices--choices-multiple-remove-button-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Choice 3" data-select-text="Press to select" data-choice-selectable="">Choice 3</div><div id="choices--choices-multiple-remove-button-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Choice 4" data-select-text="Press to select" data-choice-selectable="">Choice 4</div><div id="choices--choices-multiple-remove-button-item-choice-5" className="choices__item choices__item--choice choices__item--disabled" role="option" data-choice="" data-id="5" data-value="One" data-select-text="Press to select" data-choice-disabled="" aria-disabled="true">Label One</div><div id="choices--choices-multiple-remove-button-item-choice-7" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="7" data-value="Three" data-select-text="Press to select" data-choice-selectable="">Label Three</div></div></div></div> */}
              <div className="row">
                <div className="col-6">
                  <label className="form-label">Expiry Date</label>
                  <input className="form-control datetimepicker flatpickr-input" type="text" placeholder="Please select start date" data-input="" onfocus="focused(this)" onfocusout="defocused(this)"/>
                </div>
                {/* <div className="col-6">
                  <label className="form-label">End Date</label>
                  <input className="form-control datetimepicker flatpickr-input" type="text" placeholder="Please select end date" data-input="" onfocus="focused(this)" onfocusout="defocused(this)"/>
                </div> */}
              </div>
              <label className="mt-4 form-label">Benefit Description</label>
              <div className="ql-container ql-snow"><div className="ql-editor" data-gramm="false" contenteditable="true"></div><div className="ql-clipboard" contenteditable="true" tabindex="-1"></div><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"/><a className="ql-action"></a><a className="ql-remove"></a></div></div>
              <label className="mt-4 form-label">Starting Files</label>
              <form action="/file-upload" className="form-control dropzone dz-clickable">
                
              <div className="dz-default dz-message"><button className="dz-button" type="button">Drop files here to upload</button></div></form>
              <div className="d-flex justify-content-end mt-4">
                <button type="button" name="button" className="btn btn-light m-0">Cancel</button>
                <button type="button" name="button" className="btn bg-gradient-primary m-0 ms-2">Create Project</button>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer pt-3  ">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="copyright text-center text-sm text-muted text-lg-start">
                  © <script>
                    document.write(new Date().getFullYear())
                  </script>2024,
                  made with <i className="fa fa-heart" aria-hidden="true"></i> by
                  <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                  for a better web.
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}
