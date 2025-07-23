<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsurePatientDashboard
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        // Check if user is a patient
        if ($user && $user->role === 'Patient') {
            // Allow only patient dashboard routes
            if (!$request->is('Dashboard/PatientDashboard*')) {
                // Redirect or abort if trying to access other dashboards
                return redirect('/Dashboard/PatientDashboard');
            }
        }
        return $next($request);
    }
}
