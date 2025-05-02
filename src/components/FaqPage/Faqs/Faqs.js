import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from 'utils/Media'
import SingleFaq from './singleFaq'

const FaqStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto;

  .category {
    margin-top: 1rem;
    position: relative;

    h2 {
      color: #fff;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
  }

  @media ${media.md} {
    margin-top: 0;
    .category {
      margin: 0;

      h2 {
        font-size: 2rem;
      }
    }
  }
`
const Faqs = ({ data, activeTab }) => {
  const [open, setOpen] = useState(null)
  const toggleActive = id => {
    if (open === id) {
      setOpen(null)
    } else {
      setOpen(id)
    }
  }

  return (
    <FaqStyles>
      {data.map((category, i) => (
        <div className="category" id={category.category} key={i}>
          {/* <h2>{category.category}</h2> */}
          <div className="questions">
            {category.questions.map((question, i) => {
              const id = `${category.category}${i}`
              return (
                <SingleFaq
                  key={i}
                  id={id}
                  data={question}
                  open={open}
                  toggleActive={toggleActive}
                />
              )
            })}
          </div>
        </div>
      ))}
    </FaqStyles>
  )
}

export default Faqs
