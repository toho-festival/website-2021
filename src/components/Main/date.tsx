import styled from 'styled-components';

const backGroundImageUrl = process.env.basePath + "/images/tesukiwashi-pattern-04.jpg"

const Date = styled(props => <section { ...props }>
  <h2>DATE</h2>
  <div>
    <table>
      <tbody>
        <tr>
          <td>9月11日(土)</td>
          <td>9月12日(日)</td>        
          <td>9月13日(月)</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    <span>※今年度の桐朋祭は生徒のみとなります</span>
  </p>
</section>)`
  padding-block: 2rem;
  text-align: center;
  color: black;
  background-image: url(${ backGroundImageUrl });
  background-size: cover;

  > h2 {
    font-size: 1.5rem;
    line-height: 1;

    ::before, ::after {
      content: '－';
    }
  }

  > div {
    font-size: 0;

    > table {
      display: inline-block;
      margin-block: .5rem;
      font-size: 1rem;
    }
  }

  > p {
    text-align: center;
    font-size: .75rem;

    > span {
      display: block;
      :nth-child(2n) {
        font-size:1rem;
      }    
    }
  }
`;

export default Date;