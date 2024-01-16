import React from 'react';

const FAQ = () => {

    const queries = [
        {
            id:1, ques:"Can education flashcards be used for all age groups?", ans:"Education flashcards are versatile tools suitable for all ages. Whether featuring colorful images for younger learners or complex concepts for older ones, flashcards can adapt to various educational needs."
        },
        {
            id:2, ques:"How do education flashcards work?", ans:"Education flashcards work by presenting concise information or questions on one side and corresponding answers on the other. Learners use them for active recall, reinforcing knowledge through repetition and visual cues."
        },
        {
            id:3, ques:"Can education flashcards be used for test preparation?", ans:"Yes, education flashcards are effective tools for test preparation. They facilitate active recall, aid in memorization, and allow learners to review key concepts quickly. Flashcards are particularly useful for reinforcing vocabulary, formulas, historical dates, and other essential information."
        },
        
    ]
    return (
        <div className='py-16'>
            <h2 className='text-5xl font-bold text-[#072B6B] pb-2'>FAQ</h2>
            <div className='w-8/12'>
                {
                    queries.map((faq)=>
                    <div key={faq.id} x-data="{ open: false }" className="collapse collapse-arrow border border-[#072B6B] my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        {faq.ques}
                    </div>
                    <div className="collapse-content">
                        <p>{faq.ans} </p>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    );
};

export default FAQ;