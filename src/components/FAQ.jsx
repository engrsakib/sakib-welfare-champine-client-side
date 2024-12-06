import React from 'react';

const FAQ = () => {
    return (
      <div className="mt-7 flex max-sm:flex-col gap-4">
        <section className="w-[100%] md:w-1/2">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I make a donation?
            </div>
            <div className="collapse-content">
              <p>
                You can make a donation by visiting our website, selecting a
                campaign, and clicking on the "Donate Now" button. You’ll be
                guided through a secure process to complete your contribution.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is my donation tax-deductible?
            </div>
            <div className="collapse-content">
              <p>
                Yes, donations are tax-deductible if they meet the criteria of
                your country's tax laws. After completing your donation, you'll
                receive a receipt that can be used for tax purposes. Check with
                your local tax authority for specific regulations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How will my donation be used?
            </div>
            <div className="collapse-content">
              <p>
                Your donation will directly support the selected campaign. The
                funds are allocated for the purposes mentioned in the campaign
                description, such as helping individuals, funding projects, or
                supporting causes.
              </p>
            </div>
          </div>
        </section>
        <section>
            
        </section>
      </div>
    );
};

export default FAQ;