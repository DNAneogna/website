import { Component } from 'react';
import dateFormat from "@/lib/utils/dateFormat";

class SigList extends Component {
  render() {
    return (
      <div class="row justify-center">
        {
          this.props.sigs.reverse().map((sig) => (
            <div key="{sig.data.id}" class="mb-14 md:col-6 lg:col-4" >
              <div class="rounded bg-light p-8 text-center dark:bg-darkmode-light">
                <h4 class="mb-3">
                  {sig.data.title}
                </h4>
                <p class="mb-4">
                  {sig.data.status}
                </p>
                <p class="text-primary dark:text-darkmode-primary">
                  {sig.data.date && dateFormat(sig.data.date, "dd MMM, yyyy @ HH:mm")}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SigList;
