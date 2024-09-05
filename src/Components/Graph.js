import { Bar } from 'react-chartjs-2';


function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: '550px' }}>
        <Bar
          data={{
            labels: ['Ju', 'Au', 'Se', 'Oc' , 'No' , 'De'],
            datasets: [
              {
                data: [4000, 1300, 3000, 2700, 1550,500],
                backgroundColor: ['antiquewhite', 'antiquewhite', 'antiquewhite', 'antiquewhite', 'orange', 'orange'],
                borderColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke', 'orange', 'orange'],
                borderWidth: 0.5,
                borderRadius:10,
              },

            ],
          }}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;