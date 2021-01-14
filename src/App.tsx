import data from "./data";

const App = () => {
  const {
    name,
    role,
    phone,
    email,
    website,
    location,
    summary,
    skills,
    passions,
    experience,
    education,
  } = data;
  return (
    <div style={{ margin: "32px", fontFamily: "sans-serif" }}>
      <div>
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "2.4rem",
            fontWeight: "bold",
          }}
        >
          {name}
        </div>
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "blue",
          }}
        >
          {role}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            flexFlow: "wrap",
          }}
        >
          <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>{phone}</div>
          <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>{email}</div>
          <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            {website}
          </div>
          <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            {location}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <div style={{ width: "65%" }}>
          {/* Summary */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "100%",
                borderBottom: "5px solid black",
              }}
            >
              SUMMARY
            </div>
            <div style={{ margin: ".5rem 0" }}>
              <div>{summary[0]}</div>
              <br />
              <div>{summary[1]}</div>
            </div>
          </div>

          {/* Passion */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "100%",
                borderBottom: "5px solid black",
              }}
            >
              PASSIONS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexFlow: "wrap",
                margin: ".5rem 0",
                padding: "0 3rem",
              }}
            >
              {passions.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
          {/* Experience */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "100%",
                borderBottom: "5px solid black",
              }}
            >
              EXPERIENCE
            </div>
            <div style={{ margin: ".5rem 0" }}>
              {experience?.map(
                ({
                  company,
                  role,
                  location,
                  startDate,
                  endDate,
                  mainDetails,
                  details,
                }) => {
                  return (
                    <div>
                      <div
                        style={{
                          fontSize: "1.5rem",
                          color: "blue",
                          fontWeight: "bold",
                        }}
                      >
                        {company}
                      </div>
                      <div
                        style={{
                          fontSize: "1.2rem",
                          margin: "0.5rem 0",
                        }}
                      >
                        {role}
                      </div>

                      <div style={{ display: "flex" }}>
                        <div
                          style={{ paddingRight: "1rem" }}
                        >{`${startDate} - ${endDate}`}</div>
                        <div>{location}</div>
                      </div>
                      <div>{mainDetails}</div>
                      <ul style={{ margin: 0 }}>
                        {details?.map((item) => {
                          return <li>{item} </li>;
                        })}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* Education */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "100%",
                borderBottom: "5px solid black",
              }}
            >
              EDUCATION
            </div>
            <div style={{ margin: ".5rem 0" }}>
              {education?.map(({ name, startDate, endDate, subject }) => {
                return (
                  <div style={{ margin: ".5rem 0" }}>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        color: "blue",
                        fontWeight: "bold",
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: "1.2rem" }}>{subject}</div>
                    <div>{`${startDate} - ${endDate}`}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "100%",
                borderBottom: "5px solid black",
              }}
            >
              SKILLS
            </div>
            <div style={{ margin: "0.5rem 0" }}>
              <div style={{ color: "blue", fontSize: "1.5rem" }}>Front End</div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  margin: "1rem 0",
                  lineHeight: "2rem",
                }}
              >
                {skills.frontEnd?.map((ski) => (
                  <div
                    style={{
                      backgroundColor: "blue",
                      borderRadius: "20px",
                      color: "white",
                      textAlign: "center",
                      padding: "0 0.5rem",
                      margin: "0.5rem",
                    }}
                  >
                    {ski}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ margin: "0.5rem 0" }}>
              <div style={{ color: "blue", fontSize: "1.5rem" }}>Back End</div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  margin: "1rem 0",
                  lineHeight: "2rem",
                }}
              >
                {skills.backEnd?.map((ski) => (
                  <div
                    style={{
                      backgroundColor: "blue",
                      borderRadius: "20px",
                      color: "white",
                      textAlign: "center",
                      padding: "0 0.5rem",
                      margin: "0.5rem",
                    }}
                  >
                    {ski}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ margin: "0.5rem 0" }}>
              <div style={{ color: "blue", fontSize: "1.5rem" }}>Tools</div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  margin: "1rem 0",
                  lineHeight: "2rem",
                }}
              >
                {skills.tools?.map((ski) => (
                  <div
                    style={{
                      backgroundColor: "blue",
                      borderRadius: "20px",
                      color: "white",
                      textAlign: "center",
                      padding: "0 0.5rem",
                      margin: "0.5rem",
                    }}
                  >
                    {ski}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
